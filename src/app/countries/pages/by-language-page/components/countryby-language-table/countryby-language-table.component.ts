import { Component, Input } from '@angular/core';
import { Language } from '@countries/interfaces/language';

@Component({
  selector: 'countryby-language-table',
  standalone: true,
  imports: [],
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
