import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css'],
})
export class HistoryPageComponent implements OnInit {
  resultList: TrackModel[] = [];
  constructor(private searchService: SearchService) {}

  receiveData(event: string): void {
    this.searchService.searchByKeyword$(event).subscribe({
      next: ({ data }) => {
        this.resultList = data;
      },
    });
  }

  ngOnInit(): void {}
}
