import { Component } from '@angular/core';
import { CountryTableComponent } from '@countries/components/country-table/country-table.component';
import { Country } from '@countries/interfaces/country';
import { CountriesService } from '@countries/services/countries.service';
import { SearchBoxComponent } from '@shared/components/search-box/search-box.component';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export default class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByCapital(term: string) {
    this.countriesService.searchCapital(term)
      .subscribe(countries => {
        this.countries = countries
      })
  }
}
