import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../_services/token-storage/token-storage.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  currentUser: any;

  constructor(private token: TokenStorageService, private route: ActivatedRoute, private http: HttpClient) { }



  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

}
