import { Component, OnInit } from '@angular/core';
import { CountriesService } from '@countries/services/countries.service';
import { SearchBoxComponent } from '@shared/components/search-box/search-box.component';
import { CountryTableComponent } from '../by-capital-page/components/country-table/country-table.component';
import { Country } from '@countries/interfaces/country';


type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent],
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export default class ByRegionPageComponent implements OnInit {

  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries
  }

  searchByRegion(region: Region) {
    this.selectedRegion = region
    this.countriesService.searchRegion(region)
      .subscribe(countries => {
        this.countries = countries
      })
  }

}
