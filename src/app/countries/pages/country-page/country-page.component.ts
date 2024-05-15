import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Country } from '@countries/interfaces/country';
import { CountriesService } from '@countries/services/countries.service';
import { pipe, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-page.component.html',
  styles: ``
})
export default class CountryPageComponent implements OnInit{
  public country?: Country

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) {}
  ngOnInit(): void {
      this.activatedRoute.params
        .pipe(
          switchMap(({ id }) => this.countriesService.searchCountryByAlphaCode(id) )
        )
        .subscribe( country => {
          if (!country) return this.router.navigateByUrl('')
            return this.country = country
        })
  }
}
