import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '@countries/interfaces/country';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {


  private apiUrl: string = 'https://restcountries.com/v3.1'

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
  }

  searchCountryByAlphaCode(alphaCode: string): Observable<Country | null>{
    return this.httpClient.get<Country[]>(`${this.apiUrl}/alpha/${alphaCode}`)
    .pipe(
      map( countries => countries.length > 0 ? countries[0]: null ),
      catchError(() => of(null))
    )
  }

  searchRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`
    return this.getCountriesRequest(url)
  }

  searchLanguage(language: string) {
    const url = `${this.apiUrl}/lang/${language}`
    return this.getCountriesRequest(url)
  }

  searchCountry(country: string) {
    const url = `${this.apiUrl}/name/${country}`
    return this.getCountriesRequest(url)
  }

}
