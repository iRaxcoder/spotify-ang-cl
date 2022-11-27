import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-playlist-body',
  templateUrl: './playlist-body.component.html',
  styleUrls: ['./playlist-body.component.css'],
})
export class PlaylistBodyComponent implements OnInit {
  @Input() tracks: TrackModel[] = [];

  sortOption: { property: string | null; order: string } = {
    property: null,
    order: 'asc',
  };
  constructor() {}

  ngOnInit(): void {}

  changeSort(property: string): void {
    const { order } = this.sortOption;
    this.sortOption = {
      property,
      order: order === 'asc' ? 'desc' : 'asc',
    };
  }
}
