import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { LoginData, RegistrationResponse, User } from '../model/user';

const AUTH_BASE_URL = 'http://localhost:3000/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private http = inject(HttpClient);

  private _isConnected = signal(!!this.getAuthToken());
  isConnected = this._isConnected.asReadonly();

  register(user: User) {
    return this.http.post<RegistrationResponse>(`${AUTH_BASE_URL}/register`, user);
  }

  getAuthToken() {
    return localStorage.getItem('token');
  }

  saveAuthToken(token: string) {
    localStorage.setItem('token', token);
    this._isConnected.set(true);
  }

  login(data: LoginData) {
    return this.http.post<{ token: string }>(`${AUTH_BASE_URL}/login`, data);
  }

  logout() {
    localStorage.removeItem('token');
    this._isConnected.set(false);
  }
}
