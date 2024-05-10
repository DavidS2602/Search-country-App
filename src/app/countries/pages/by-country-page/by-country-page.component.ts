import { Component } from '@angular/core';
import { Country } from '@countries/interfaces/country';
import { CountriesService } from '@countries/services/countries.service';
import { SearchBoxComponent } from '@shared/components/search-box/search-box.component';
import { ByCountryTablePageComponent } from './components/by-country-table-page/by-country-table-page.component';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [SearchBoxComponent,ByCountryTablePageComponent],
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export default class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByCountry(term: string) {
    this.countriesService.searchCountry(term)
      .subscribe(countries => {
        this.countries = countries
        console.log(countries)
      })
  }
}
