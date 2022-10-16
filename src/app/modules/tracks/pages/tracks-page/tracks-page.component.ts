import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {

  observerList$: Array<Subscription> = []
  trendingTracks: Array<TrackModel> = []
  randomTracks: Array<TrackModel> = []
  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    const observerTrending$ = this.trackService.trendingTracks$.subscribe(response => {
      this.trendingTracks = response
    })
    const observerRandom$ = this.trackService.randomTracks$.subscribe(response => {
      this.randomTracks = response
    })
    this.observerList$ = [observerTrending$, observerRandom$]
  }

  ngOnDestroy(): void {
    this.observerList$.forEach(o => o.unsubscribe)
  }

}
