import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../_services/token-storage/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../../_services/item/item.service';
import { HttpClient } from '@angular/common/http';
import { ConfirmationDialogService } from '../../_services/confirmation-dialog/confirmation-dialog.service';


@Component({
  selector: 'app-my-appliances',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.scss']
})
export class MyItemsComponent implements OnInit {
  currentUser: any;
  items: any = [];
  errorMessage = '';
  isSuccessful = false;

  constructor(private token: TokenStorageService, private route: ActivatedRoute, private itemService: ItemService, private http: HttpClient, private confirmationDialogService: ConfirmationDialogService, private router: Router) { }

  ngOnInit(): void {
  this.currentUser = this.token.getUser();
    this.route.queryParams
    .subscribe(params => {
      console.log(params);

      this.currentUser.username = params.username;
      console.log(this.currentUser.username);

      const username = this.currentUser.username;

      this.itemService.getItems(username)
      .subscribe(
        data => {
          console.log(data);
            console.log(data.items);
            this.items = data.items;
          },
        err => {
          this.errorMessage = err.error.message;
        });
    })
  }
}
