import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Region } from '@countries/interfaces/region';

@Component({
  selector: 'countryby-region-table',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './countryby-region-table.component.html',
  styles: `
    img {
      width: 35px;
    }
  `
})
export class CountrybyRegionTableComponent {
  @Input()
  public countries: Region[] = [];
}
