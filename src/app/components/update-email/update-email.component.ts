import { Component, OnInit, ViewChild } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage/token-storage.service';
import { UserService } from 'src/app/_services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-email',
  templateUrl: './update-email.component.html',
  styleUrls: ['./update-email.component.scss']
})
export class UpdateEmailComponent implements OnInit {

  currentUser: any;
  
  form: any = {
    email: null
  };

  isSuccessful = false;
  errorMessage = '';

  constructor(private token: TokenStorageService, private userService: UserService, private route: ActivatedRoute, private router: Router) { }

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
    const { email } = this.form;

    this.userService.updateEmail(username, email).subscribe (
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.currentUser = data;
      },
      err => {
        this.errorMessage = err.error.message;
      });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
