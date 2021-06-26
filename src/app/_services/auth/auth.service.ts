import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://happle-backend.azurewebsites.net/';
//const AUTH_API = 'http://localhost:4000/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username,
      password
    }, httpOptions);
  }


  signup(username: string, email: string, password: string, first_name: string, last_name: string, address: string, zipcode: string, phone: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password,
      first_name,
      last_name,
      address,
      zipcode,
      phone
    }, httpOptions);
  }
}
