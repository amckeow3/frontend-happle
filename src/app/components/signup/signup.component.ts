import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth/auth.service';
import { Router } from '@angular/router';
import { ConfirmationDialogService } from '../../_services/confirmation-dialog/confirmation-dialog.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
    password: null,
    first_name: null,
    last_name: null,
    address: null,
    zipcode: null,
    phone: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password, first_name, last_name, address, zipcode, phone } = this.form;

    this.authService.signup(username, email, password, first_name, last_name, address, zipcode, phone).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
