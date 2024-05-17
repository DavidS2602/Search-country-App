import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CacheStore } from '@interfaces/cache-store.interface';
import { Country } from '@interfaces/country';
import { Region } from '@interfaces/region.type';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1'

  public cacheStore: CacheStore = {
    byCapital: {term: '', countries: []},
    byRegion: {region: '', countries: []},
    byLanguage: {term: '', countries: []},
    byCountries: {term: '', countries: []},
  }

  constructor(private httpClient: HttpClient) {}

  private getCountriesRequest(url : string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(() => of([]))
    )
  }

  searchCapital(capital: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${capital}`
    return this.getCountriesRequest(url)
      .pipe(
        tap( countries => {
          this.cacheStore.byCapital = {term: capital, countries}
          return countries
        })
      )
  }

  searchCountryByAlphaCode(alphaCode: string): Observable<Country | null>{
    return this.httpClient.get<Country[]>(`${this.apiUrl}/alpha/${alphaCode}`)
    .pipe(
      map( countries => countries.length > 0 ? countries[0]: null ),
      catchError(() => of(null))
    )
  }

  searchRegion(region: Region): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`
    return this.getCountriesRequest(url)
      .pipe(
        tap( countries => {
          this.cacheStore.byRegion = {region, countries}
          return countries
        })
      )
  }

  searchLanguage(language: string) {
    const url = `${this.apiUrl}/lang/${language}`
    return this.getCountriesRequest(url)
      .pipe(
        tap( countries => {
          this.cacheStore.byLanguage = {term: language, countries}
          return countries
        })
      )
  }

  searchCountry(country: string) {
    const url = `${this.apiUrl}/name/${country}`
    return this.getCountriesRequest(url)
      .pipe(
        tap( countries => {
          this.cacheStore.byCountries = {term: country, countries}
          return countries
        })
      )
  }

}
