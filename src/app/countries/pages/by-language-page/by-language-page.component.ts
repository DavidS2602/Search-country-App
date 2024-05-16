import { Component } from '@angular/core';
import { CountriesService } from '@countries/services/countries.service';
import { SearchBoxComponent } from '@shared/components/search-box/search-box.component';
import { RouterLink } from '@angular/router';
import { CountryTableComponent } from '../by-capital-page/components/country-table/country-table.component';
import { Country } from '@countries/interfaces/country';

@Component({
  selector: 'app-by-language-page',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent, RouterLink],
  templateUrl: './by-language-page.component.html',
  styles: ``
})
export default class ByLanguagePageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByLanguage(term: string) {
    this.countriesService.searchLanguage(term)
      .subscribe(countries => {
        this.countries = countries
        console.log(countries)
      })
  }
}
