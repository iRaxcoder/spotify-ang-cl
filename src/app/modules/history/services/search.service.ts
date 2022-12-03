import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly URL = environment.api_url;
  constructor(private http: HttpClient) {}

  searchByKeyword$(keyword: string): Observable<any> {
    return this.http
      .get(`${this.URL}/tracks?src=${keyword}`)
      .pipe(map((rawData: any) => rawData.data));
  }
}
