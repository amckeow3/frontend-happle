import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../_services/token-storage/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isCollapsed = false;
  isLoggedIn = false;
  currentUser: any;

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
