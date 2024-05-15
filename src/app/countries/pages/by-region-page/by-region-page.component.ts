import { Component } from '@angular/core';
import { Region } from '@countries/interfaces/region';
import { CountriesService } from '@countries/services/countries.service';
import { SearchBoxComponent } from '@shared/components/search-box/search-box.component';
import { CountrybyRegionTableComponent } from './components/countryby-region-table/countryby-region-table.component';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [SearchBoxComponent, CountrybyRegionTableComponent],
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export default class ByRegionPageComponent {

  public countries: Region[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByRegion(term: string) {
    this.countriesService.searchRegion(term)
      .subscribe(countries => {
        this.countries = countries
      })
  }
}
