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

  searchCapital(capital: string) {
    return this.httpClient.get<Country[]>(`${this.apiUrl}/capital/${capital}`)
    .pipe(
      catchError(() => of([]))
    )
  }

  searchCountryByAlphaCode(alphaCode: string): Observable<Country | null>{
    return this.httpClient.get<Country[]>(`${this.apiUrl}/alpha/${alphaCode}`)
    .pipe(
      map( countries => countries.length > 0 ? countries[0]: null ),
      catchError(() => of(null))
    )
  }

  searchRegion(region: string) {
    return this.httpClient.get<Country[]>(`${this.apiUrl}/region/${region}`)
    .pipe(
      catchError(() => of([]))
    )
  }

  searchLanguage(language: string) {
    return this.httpClient.get<Country[]>(`${this.apiUrl}/lang/${language}`)
    .pipe(
      catchError(() => of([]))
    )
  }

  searchCountry(country: string) {
    return this.httpClient.get<Country[]>(`${this.apiUrl}/name/${country}`)
    .pipe(
      catchError(() => of([]))
    )
  }

}
