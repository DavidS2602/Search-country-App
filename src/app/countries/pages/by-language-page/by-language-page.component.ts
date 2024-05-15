import { Component } from '@angular/core';
import { Language } from '@countries/interfaces/language';
import { CountriesService } from '@countries/services/countries.service';
import { SearchBoxComponent } from '@shared/components/search-box/search-box.component';
import { CountrybyLanguageTableComponent } from './components/countryby-language-table/countryby-language-table.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-by-language-page',
  standalone: true,
  imports: [SearchBoxComponent, CountrybyLanguageTableComponent, RouterLink],
  templateUrl: './by-language-page.component.html',
  styles: ``
})
export default class ByLanguagePageComponent {

  public countries: Language[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByLanguage(term: string) {
    this.countriesService.searchLanguage(term)
      .subscribe(countries => {
        this.countries = countries
        console.log(countries)
      })
  }
}
