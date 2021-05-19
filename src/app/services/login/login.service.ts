import { Login } from './../../models/login.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiURL = 'https://hub.cobiro.com/v1/login';

  constructor(private http: HttpClient) { }

  loginUser(body: Login) {
    const data = {
        type: 'login',
        attributes: body
    }
    return this.http.post<Login>(this.apiURL, data)
  }
}
