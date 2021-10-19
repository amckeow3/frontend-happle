import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccountComponent } from './components/account/account.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ItemRegistrationComponent } from './components/item-registration/item-registration.component';
import { MyItemsComponent } from './components/my-items/my-items.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ConfirmationDialogService } from './_services/confirmation-dialog/confirmation-dialog.service';
import { ChoosePaymentComponent } from './components/choose-payment/choose-payment.component';
import { ReviewOrderComponent } from './components/review-order/review-order.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { UpdateEmailComponent } from './components/update-email/update-email.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ConfirmationDialogComponent,
    MainPageComponent,
    NavbarComponent,
    AccountComponent,
    HomepageComponent,
    ItemDetailsComponent,
    ItemRegistrationComponent,
    MyItemsComponent,
    PaymentsComponent,
    ProfileComponent,
    NotificationsComponent,
    ChoosePaymentComponent,
    ReviewOrderComponent,
    OrderConfirmationComponent,
    UpdateEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ authInterceptorProviders, ConfirmationDialogService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
