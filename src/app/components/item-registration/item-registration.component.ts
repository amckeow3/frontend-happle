import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../_services/token-storage/token-storage.service';
import { ItemService } from '../../_services/item/item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-registration',
  templateUrl: './item-registration.component.html',
  styleUrls: ['./item-registration.component.scss']
})
export class ItemRegistrationComponent implements OnInit {
  currentUser: any;

  form: any = {
    item_name: null,
    item_desc: null,
    price_per_day: null
  };

  isSuccessful = false;
  isRegistrationFailed = false;
  errorMessage = '';

  constructor(private itemService: ItemService, private token: TokenStorageService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.route.queryParams
    .subscribe(params => {
      console.log(params);

      this.currentUser.username = params.username;
      console.log(this.currentUser.username);
    });
  }

  onSubmit(): void {
    this.currentUser = this.token.getUser();

      const username = this.currentUser.username;
      const { item_name, item_desc, price_per_day } = this.form;

      this.itemService.itemRegistration(username, item_name, item_desc, price_per_day).subscribe (
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isRegistrationFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isRegistrationFailed = true;
      });
  }
}
