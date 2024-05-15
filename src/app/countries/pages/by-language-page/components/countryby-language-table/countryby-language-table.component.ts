import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Language } from '@countries/interfaces/language';

@Component({
  selector: 'countryby-language-table',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './countryby-language-table.component.html',
  styles: `
    img {
      width: 35px;
    }
  `
})
export class CountrybyLanguageTableComponent {
  @Input()
  public countries: Language[] = [];
}
