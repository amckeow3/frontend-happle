import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../_services/token-storage/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from '../../_services/notifications/notifications.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  currentUser: any;
  notifications: any = [];
  errorMessage = '';
  isSuccessful = false;

  constructor(private token: TokenStorageService, private route: ActivatedRoute, private notificationsService: NotificationsService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.route.queryParams
    .subscribe(params => {
      console.log(params);

      this.currentUser.username = params.username;
      console.log(this.currentUser.username);

      const username = this.currentUser.username;

      this.notificationsService.getAllNotifications(username)
      .subscribe(
        data => {
          console.log(data);
            console.log(data.notifications);
            this.notifications = data.notifications;
          },
        err => {
          this.errorMessage = err.error.message;
        });
    })
  }

}
