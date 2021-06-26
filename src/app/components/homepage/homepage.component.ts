import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../_services/token-storage/token-storage.service';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../_services/item/item.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  currentUser: any;
  users: any = [];

  constructor(private token: TokenStorageService, private route: ActivatedRoute, private itemService: ItemService, private http: HttpClient) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.route.queryParams
    .subscribe(params => {
      console.log(params);

      this.currentUser.username = params.username;
      this.currentUser.zipcode = params.zipcode;
      console.log(this.currentUser.username);
      console.log(this.currentUser.zipcode);

      const username = this.currentUser.username;
      const zipcode = this.currentUser.zipcode;
      this.itemService.getNearbyItems(username, zipcode)
      .subscribe(users => {
        for (let i in users) {
          console.log(users[i]);
          this.users = users[i];
          this.users.forEach(getUserInfo);
          console.log(users);

          function getUserInfo(value: any) {
            return value;
          }
          for (let i in users.items) {
            console.log(users.items[i]);
            this.users.items = users.items[i];
            this.users.items.forEach(getItemInfo);

            function getItemInfo(value: any) {
              return value;
            }


            }
          }
        })
    })
  }

  getTime() {
    var today = new Date();
    return today;
  }
}
