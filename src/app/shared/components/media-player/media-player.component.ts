import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs' //reactive programming;

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  mockCover: TrackModel = {
    cover: 'djjkdd',
    album: 'sdskd',
    name: 'bebe',
    url: 'sdjsjdk',
    _id: 1
  }

  observerList$: Array<Subscription> = []

  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.callBack.subscribe((response: TrackModel) => {

    })

    this.observerList$ = [observer1$]
  }

  ngOnDestroy(): void {
    this.observerList$.forEach(u => u.unsubscribe())
  }

}
