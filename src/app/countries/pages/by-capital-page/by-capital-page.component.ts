import { Component, OnInit } from '@angular/core';
import { CountryTableComponent } from '@countries/pages/by-capital-page/components/country-table/country-table.component';
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
export default class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public initialValue: string = ''

  constructor(private countriesService: CountriesService) {}
  //* Recuperando la data de la cache
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries
    this.initialValue = this.countriesService.cacheStore.byCapital.term
  }

  searchByCapital(term: string) {
    this.countriesService.searchCapital(term)
      .subscribe(countries => {
        this.countries = countries
      })
  }
}
