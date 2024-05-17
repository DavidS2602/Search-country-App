import { Component, OnInit } from '@angular/core';
import { Country } from '@countries/interfaces/country';
import { CountriesService } from '@countries/services/countries.service';
import { SearchBoxComponent } from '@shared/components/search-box/search-box.component';
import { CountryTableComponent } from '../by-capital-page/components/country-table/country-table.component';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [SearchBoxComponent,CountryTableComponent],
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export default class ByCountryPageComponent implements OnInit {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries
  }

  searchByCountry(term: string) {
    this.countriesService.searchCountry(term)
      .subscribe(countries => {
        this.countries = countries
        console.log(countries)
      })
  }
}
