import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'https://happle-backend.azurewebsites.net/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private http: HttpClient) { }

  getAllNotifications(username: string): Observable<any> {
    return this.http.get(API_URL + 'notifications/' + username )
      .pipe(map((response: any) => response));
  }

}
