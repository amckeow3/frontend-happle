import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PaymentService } from '../../_services/payment/payment.service';
import { TokenStorageService } from '../../_services/token-storage/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  currentUser: any;
  payments: any = [];
  form: any = {
      card_no: null,
      name: null,
      exp_month: null,
      exp_year: null,
      card_type: null,
      cvc: null
  };
  isSuccessful = false;
  isRegistrationFailed = false;
  errorMessage = '';

  constructor(private token: TokenStorageService, private route: ActivatedRoute, private paymentService: PaymentService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.route.queryParams
    .subscribe(params => {
      console.log(params);

      this.currentUser.username = params.username;
      console.log(this.currentUser.username);

      const username = this.currentUser.username;

      this.paymentService.getPaymentMethods(username)
      .subscribe(
        data => {
          console.log(data);
            console.log(data.payments);
            this.payments = data.payments;
          },
        err => {
          this.errorMessage = err.error.message;
        });
    })
  }

  onSubmit(): void {
    this.currentUser = this.token.getUser();

      const username = this.currentUser.username;
      const { card_no, name, exp_month, exp_year, card_type, cvc } = this.form;

      this.paymentService.newPaymentMethod(username, card_no, name, exp_month, exp_year, card_type, cvc).subscribe (
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isRegistrationFailed = false;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isRegistrationFailed = true;
      });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
