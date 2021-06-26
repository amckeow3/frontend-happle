import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth/auth.service';
import { TokenStorageService } from '../../_services/token-storage/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  currentUser: any;

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.currentUser = this.tokenStorage.getUser();
      this.router.navigate(['/homepage'], { queryParams: { username: this.currentUser.username, zipcode: this.currentUser.zipcode } });
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
    data => {
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUser(data);
      this.tokenStorage.getUser();

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.reloadPage();
    },
    err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
      this.isLoggedIn = false;
    }
  );
}

  reloadPage(): void {
    window.location.reload();
  }
}
