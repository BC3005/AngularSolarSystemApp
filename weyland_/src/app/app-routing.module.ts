import { SettingsComponent } from './component/settings/settings.component';
import { BodidetailsComponent } from './component/bodidetails/bodidetails.component';
import { BodiesComponent } from './component/bodies/bodies.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { AuthGuard } from './shared/guard/auth.guard';
const routes: Routes = [
  {path: 'bodies', component: BodiesComponent},
  {path: 'bodies/:englishName', component: BodidetailsComponent},
  {path: 'settings', component: SettingsComponent},
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
