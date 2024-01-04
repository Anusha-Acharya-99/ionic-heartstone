import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  @Input() items: any[] = [];
  @Input() filterProperty!: string;
  @Output() searchCompleted = new EventEmitter();
  @Output() searchLoader = new EventEmitter();

  searchSubject = new BehaviorSubject<string>('');

  handleSearch(event: any) {
    this.searchLoader.emit();
    this.searchSubject.next(event.target.value);
  }

  ngAfterViewInit() {
    this.searchSubject
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((searchText) => {
        const filteredItems = this.items.filter((item) => {
          return item[this.filterProperty]
            .toLowerCase()
            .includes(searchText.toLowerCase());
        });
        this.searchCompleted.emit(filteredItems);
      });
  }
}
