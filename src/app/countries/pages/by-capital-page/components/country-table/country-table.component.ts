import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Country } from '@countries/interfaces/country';

@Component({
  selector: 'countries-table',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './country-table.component.html',
  styles: `
    img {
      width: 35px;
    }
  `
})
export class CountryTableComponent {
  @Input()
  public countries: Country[] = [];
}
