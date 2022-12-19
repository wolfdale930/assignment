import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoggedInUser } from '../models/loggedInUser.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getLoggedInUser() : LoggedInUser | null {
    const storage = localStorage.getItem('BENESSE_USER');
    if (storage && JSON.parse(storage)) {
      return JSON.parse(storage);
    }
    return null;
  }

  saveLoggedInUser(user: LoggedInUser) {
    if (user) {
      localStorage.setItem('BENESSE_USER', JSON.stringify(user));
    }
  }

  logout() {
    localStorage.clear();
    location.reload();
  }

  async login(credentials: LoggedInUser) {
    const response = await firstValueFrom(this.http.post(`${environment.apiUrl}/login`, credentials));
    return response;
  }

  async register(credentials: LoggedInUser) {
    const response = await firstValueFrom(this.http.post(`${environment.apiUrl}/register`, credentials));
    return response;
  }

}
