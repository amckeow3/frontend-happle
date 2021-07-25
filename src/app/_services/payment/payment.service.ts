import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'https://happle-backend.azurewebsites.net/';
//const AUTH_API = 'http://localhost:4000/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  newPaymentMethod(username: string, card_no: string, name: string, exp_month: string, exp_year: string, card_type: string, cvc: string): Observable<any> {
    return this.http.post(API_URL + 'newPaymentMethod/' + username, {
      card_no,
      name,
      exp_month,
      exp_year,
      card_type,
      cvc
    });
  }

  getPaymentMethods(username: string): Observable<any> {
    return this.http.get(API_URL + 'myPaymentMethods/' + username)
    .pipe(map((response: any) => response));
  }

  paymentMethodDetails(username: string, card_no: string): Observable<any> {
    return this.http.get(API_URL + 'paymentMethodDetails/' + username + '/' + card_no)
    .pipe(map((response: any) => response));
  }
}
