import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://happle-backend.azurewebsites.net/';
//const API_URL = 'http://localhost:4000/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'main', { responseType: 'text'});
  }

  getUserHome(): Observable<any> {
    return this.http.get(API_URL + 'homepage', { responseType: 'text' });
  }

  deleteUser(username: string): Observable<any> {
    return this.http.delete(API_URL + 'user/' + username);
  }

  updateEmail(username: string, email: string): Observable<any> {
    return this.http.put(API_URL + 'updateEmail/' + username, {
      email
    });
  }
}
