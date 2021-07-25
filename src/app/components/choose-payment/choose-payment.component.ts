import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../_services/token-storage/token-storage.service';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from 'src/app/_services/payment/payment.service';
import { ItemService } from '../../_services/item/item.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-choose-payment',
  templateUrl: './choose-payment.component.html',
  styleUrls: ['./choose-payment.component.scss']
})
export class ChoosePaymentComponent implements OnInit {
  currentUser: any;
  payments: any = [];
  item: any = [];
  errorMessage = '';

  constructor(private route: ActivatedRoute, private itemService: ItemService, private paymentService: PaymentService, private http: HttpClient, private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.route.queryParams
    .subscribe(params => {
      console.log(params);

      this.currentUser.username = params.buyer;

      const buyer = this.currentUser.username;
      const seller = params.seller;
      const item_name = params.item;

      this.paymentService.getPaymentMethods(buyer)
      .subscribe(
        data => {
          console.log(data);
          console.log(data.payments);
          this.payments = data.payments;
      },
      err => {
        this.errorMessage = err.error.message;
      })

      this.itemService.itemDetails(seller, item_name)
      .subscribe(
        item => {
          console.log(item);
          this.item = item;
      },
      err => {
        this.errorMessage = err.error.message;
      })
    })
  }
}
