import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '@countries/interfaces/country';
import { Region } from '@countries/interfaces/region';
import { catchError, of } from 'rxjs';

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

  searchRegion(region: string) {
    return this.httpClient.get<Region[]>(`${this.apiUrl}/region/${region}`)
    .pipe(
      catchError(() => of([]))
    )
  }

}
