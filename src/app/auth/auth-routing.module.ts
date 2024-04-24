import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'forgot-password', component: ForgotPasswordComponent },
  // { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule , RouterModule.forChild(routes)
  ] ,
  exports: [RouterModule]
})
export class AuthRoutingModule { }
