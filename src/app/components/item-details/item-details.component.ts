import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../_services/token-storage/token-storage.service';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../_services/item/item.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  currentUser: any;
  data: any = [];
  errorMessage = '';
  form: any = {
    fromDt: null,
    toDt: null
  }
  isSuccessful = false;
  isSignUpFailed = false;

  constructor(private route: ActivatedRoute, private itemService: ItemService, private http: HttpClient, private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.route.queryParams
    .subscribe(params => {
      console.log(params);

      const username = params.username;
      const item_name = params.item_name;

      this.itemService.itemDetails(username, item_name)
      .subscribe(
        data => {
          console.log(data);
          this.data = data;
      },
      err => {
        this.errorMessage = err.error.message;
      })
    })
  }

  onSubmit(): void {

  }
}
