import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() callbackData: EventEmitter<any> = new EventEmitter();

  keyword: string = '';
  constructor() {}

  onSearch(keyword: string): void {
    if (keyword.length >= 3) {
      this.callbackData.emit(keyword);
    }
  }

  ngOnInit(): void {}
}
