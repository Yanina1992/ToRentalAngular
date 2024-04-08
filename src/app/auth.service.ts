import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<{access_token: string}>('http://dev.backend.torental.bentraining.it/api/auth/login', { username, password })
      .pipe(tap(res => {
        localStorage.setItem('access_token', res.access_token);
      }));
  }
}
