import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '../../../data/tracks.json';

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

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default;
    this.tracks = data;
  }

  changeSort(property: string): void {
    const { order } = this.sortOption;
    this.sortOption = {
      property,
      order: order === 'asc' ? 'desc' : 'asc',
    };
  }
}
