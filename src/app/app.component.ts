import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  currentUser: any;
  isCollapsed = false;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      this.currentUser = this.tokenStorageService.getUser();
    }
  }

  signOut(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
