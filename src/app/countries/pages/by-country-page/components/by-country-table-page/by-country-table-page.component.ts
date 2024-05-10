import { Component, Input } from '@angular/core';
import { Country,  } from '@countries/interfaces/country';

@Component({
  selector: 'by-country-table-page',
  standalone: true,
  imports: [],
  templateUrl: './by-country-table-page.component.html',
  styles: `
    img {
      width: 35px;
    }
  `
})
export class ByCountryTablePageComponent {
  @Input()
  public countries: Country[] = [];
}
