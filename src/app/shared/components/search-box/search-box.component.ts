import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit{



  private debouncer: Subject<string> = new Subject<string>();


  @Input()
  public placeholder: string = ''

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(800) //Despues de 2 segundos pasa al .subscribe
    )
    .subscribe(value => {
      this.onDebounce.emit(value);
    })
  }

  emitValue(value: string) {
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }
}
