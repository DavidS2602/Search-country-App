import { Component } from '@angular/core';
import { CountriesService } from '@countries/services/countries.service';
import { SearchBoxComponent } from '@shared/components/search-box/search-box.component';
import { CountryTableComponent } from '../by-capital-page/components/country-table/country-table.component';
import { Country } from '@countries/interfaces/country';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent],
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export default class ByRegionPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByRegion(term: string) {
    this.countriesService.searchRegion(term)
      .subscribe(countries => {
        this.countries = countries
      })
  }
}
