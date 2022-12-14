import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css'],
})
export class TracksPageComponent implements OnInit, OnDestroy {
  observerList$: Array<Subscription> = [];
  trendingTracks: Array<TrackModel> = [];
  randomTracks: Array<TrackModel> = [];
  constructor(private trackService: TrackService) {}

  ngOnInit(): void {
    this.loadAllTracks();
    this.loadDataRandom();
  }

  loadAllTracks(): void {
    this.trackService.getAllTracks$().subscribe({
      next: (resp) => {
        this.trendingTracks = resp;
        console.log(resp);
      },
      error: (error) => {
        console.log('Error ocurred', error);
      },
    });
  }

  loadDataRandom(): void {
    this.trackService.getAllRandom$().subscribe((response: TrackModel[]) => {
      this.randomTracks = response;
    });
  }

  ngOnDestroy(): void {
    this.observerList$.forEach((o) => o.unsubscribe);
  }
}
