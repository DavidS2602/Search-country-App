import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '@countries/interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private httpClient: HttpClient) {}

  searchCapital(capital: string) {
    this.httpClient.get<Country[]>(`${this.apiUrl}/capital/${capital}`)
      .subscribe((countries: Country[]) => {});
  }

}
