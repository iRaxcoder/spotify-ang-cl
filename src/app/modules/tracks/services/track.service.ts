import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { observable, Observable, of } from 'rxjs';
import * as rawData from '../../../data/tracks.json'
@Injectable({
  providedIn: 'root'
})
export class TrackService {

  trendingTracks$: Observable<TrackModel[]> = of([])
  randomTracks$: Observable<any> = of([])
  constructor() {
    const { data }: any = (rawData as any).default
    this.trendingTracks$ = of(data)

    this.randomTracks$ = new Observable(observable => {

      const trackExample: TrackModel = {
        _id: 9,
        name: 'Welcome to the Jungle',
        album: 'Appetite for destruction',
        cover: 'https://wallpapertag.com/wallpaper/full/f/1/3/936618-download-guns-n-roses-logo-wallpaper-1920x1080.jpg',
        url: '',
        artist: { name: 'Guns and Roses', nationality: 'US', nickname: 'GNR' }
      }
      observable.next([trackExample])
    })
  }
}
