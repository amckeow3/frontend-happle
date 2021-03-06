import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ItemRegistrationComponent } from './components/item-registration/item-registration.component';
import { MyItemsComponent } from './components/my-items/my-items.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { AccountComponent } from './components/account/account.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ChoosePaymentComponent } from './components/choose-payment/choose-payment.component';
import { ReviewOrderComponent } from './components/review-order/review-order.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { UpdateEmailComponent } from './components/update-email/update-email.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'item-registration',
    component: ItemRegistrationComponent
  },
  {
    path: 'my-items',
    component: MyItemsComponent
  },
  {
    path: 'item-details',
    component: ItemDetailsComponent
  },
  {
    path: 'payments',
    component: PaymentsComponent
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  },
  {
    path: 'choose-payment',
    component: ChoosePaymentComponent
  },
  {
    path: 'review-order',
    component: ReviewOrderComponent
  },
  {
    path: 'order-confirmation',
    component: OrderConfirmationComponent
  },
  {
    path: 'update-email',
    component: UpdateEmailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
