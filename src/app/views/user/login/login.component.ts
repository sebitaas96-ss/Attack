import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { environment } from 'src/environments/environment';
import {TokenService} from '../../../shared/token.service';
import {AuthStateService} from '../../../shared/auth-state.service';
import {UserService} from "../../../services/user.service";
import {StorageService} from '../../../services/storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{
  @ViewChild('loginForm') loginForm: NgForm;
  emailModel = environment.loginData?.email;
  passwordModel = environment.loginData?.password;

  buttonDisabled = false;
  buttonState = '';
  routeNavigate = '/app';

  constructor(private authService: AuthService, private notifications: NotificationsService,
              private router: Router, private token: TokenService, private authState: AuthStateService,
              private user: UserService, private storageService: StorageService) { }

  ngOnInit(): any{
     if (this.token.isLoggedIn()){
      this.router.navigate([this.routeNavigate]);
     }
  }

  onSubmit(): void {
    if (!this.loginForm.valid || this.buttonDisabled) {
      return;
    }
    this.buttonDisabled = true;
    this.buttonState = 'show-spinner';
    console.log(this.loginForm.value);
    this.authService.signIn(this.loginForm.value).subscribe(user => {
      console.log(user.data);
      this.responseHandler(user.data);
      if (user.data.company == null){
        this.routeNavigate = '/createCompany';
      }
    }, error => {
      console.log(error);
      this.buttonDisabled = false;
      this.buttonState = '';
      this.notifications.create('Error', error.error.message,
        NotificationType.Bare, { theClass: 'outline primary', timeOut: 6000, showProgressBar: false });
    }, () => {
      this.authState.setAuthState(true);
      console.log(this.routeNavigate);
      this.router.navigate([this.routeNavigate]);
      }
    );
  }
  // tslint:disable-next-line:typedef
  responseHandler(data){
    this.storageService.set('auth_token', data.token);
    this.storageService.set('user', data);
    this.storageService.set('company', data.company);
  }
}
