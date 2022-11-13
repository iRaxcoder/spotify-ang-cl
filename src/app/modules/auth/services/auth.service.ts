import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly URL = environment.api_url;

  constructor(private http: HttpClient, private cookies: CookieService) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.URL}/auth/login`, { email, password }).pipe(
      tap((responseOk: any) => {
        const { tokenSession, data } = responseOk;
        this.cookies.set('token', tokenSession, 3, '/');
      })
    );
  }
}
