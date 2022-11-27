import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { catchError, map, mergeMap, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TrackService {
  private readonly BASE_URL = environment.api_url;
  constructor(private httpClient: HttpClient) {
    //const { data }: any = (rawData as any).default
  }

  private skipById(trackList: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const tempList = trackList.filter((t) => t._id != id);
      resolve(tempList);
    });
  }

  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/tracks`).pipe(
      map(({ data }: any) => {
        return data;
      })
    );
  }

  getAllRandom$(): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/tracks`).pipe(
      mergeMap(({ data }: any) => this.skipById(data, 1)),
      //tap(data=>console.log(data)) //tap (window between requests)
      catchError((err) => {
        console.log('An error has ocurred when getting data');
        return of([]);
      })
    );
  }
}
