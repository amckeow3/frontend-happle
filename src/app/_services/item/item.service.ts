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
export class ItemService {

  constructor(private http: HttpClient) { }

  itemRegistration(username: string, item_name: string, item_desc: string, price_per_day: string): Observable<any> {
    return this.http.post(API_URL + 'itemRegistration/' + username, {
      item_name,
      item_desc,
      price_per_day
    });
  }

  getNearbyItems(username: string, zipcode: string): Observable<any> {
    return this.http.get(API_URL + 'nearbyItems/' + username + '/' + zipcode)
    .pipe(map((response: any) => response));
  }

  getItems(username: string): Observable<any> {
    return this.http.get(API_URL + 'myItems/' + username)
    .pipe(map((response: any) => response));
  }

  itemDetails(username: string, item_name: string): Observable<any> {
    return this.http.get(API_URL + 'itemDetails/' + username + '/' + item_name)
    .pipe(map((response: any) => response));
  }

  deleteItem(username: string): Observable<any> {
    return this.http.delete(API_URL + 'deleteItem/' + username);
  }

}
