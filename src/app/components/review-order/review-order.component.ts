import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../_services/token-storage/token-storage.service';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from 'src/app/_services/payment/payment.service';
import { ItemService } from '../../_services/item/item.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-review-order',
  templateUrl: './review-order.component.html',
  styleUrls: ['./review-order.component.scss']
})
export class ReviewOrderComponent implements OnInit {
  currentUser: any;
  data: any = [];
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
      const card_no = params.payment;
      const seller = params.seller;
      const item_name = params.item;

      this.paymentService.paymentMethodDetails(buyer, card_no)
      .subscribe(
        data => {
          console.log(data);
          this.data = data;
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
