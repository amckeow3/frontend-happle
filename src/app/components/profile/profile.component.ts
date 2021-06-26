import { Component, OnInit, ViewChild } from '@angular/core';
import { TokenStorageService } from '../../_services/token-storage/token-storage.service';
import { UserService } from '../../_services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationDialogService } from '../../_services/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  isEditMode = false;
  isSuccessful = false;
  errorMessage = '';

  constructor(private token: TokenStorageService, private userService: UserService, private route: ActivatedRoute, private router: Router, private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit(): void {
      this.currentUser = this.token.getUser();
  }

  openConfirmationDialog(): void {
    this.confirmationDialogService.confirm('Delete Account', 'Are you sure you want to delete your account? This action cannot be undone.')
    .then((confirmed) => {
      this.currentUser = this.token.getUser();
      this.route.queryParams
    // tslint:disable-next-line: deprecation
    .subscribe(params => {
      console.log(params);

      this.currentUser.username = params.username;
      const username = this.currentUser.username;
      this.userService.deleteUser(username)
      .subscribe(
        data => {
            this.token.signOut();
            this.router.navigate(['/']);
            this.isSuccessful = true;
          },
        err => {
          this.errorMessage = err.error.message;
      });
    });
  })
  .catch(() => console.log('exit'));
  }
}
