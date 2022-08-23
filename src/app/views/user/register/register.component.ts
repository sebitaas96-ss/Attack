import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent  {
  @ViewChild('registerForm') registerForm: NgForm;
  buttonDisabled = false;
  buttonState = '';

  constructor(private authService: AuthService, private notifications: NotificationsService,
              private router: Router) { }

  onSubmit(form: NgForm): void {
    if (!this.registerForm.valid || this.buttonDisabled) {
      return;
    }
    this.buttonDisabled = true;
    this.buttonState = 'show-spinner';
    this.authService.register(form.value).subscribe(
      res => {
        console.log(res);
        this.notifications.create('Usuario registado correctamente', 'Su registro ha sido completado correctamente' ,
          NotificationType.Bare, { theClass: 'outline primary', timeOut: 6000, showProgressBar: false });
        this.router.navigate(['/']);
      },
        error => {
          this.buttonDisabled = false;
          this.buttonState = '';
          this.notifications.create('Error', error.error.errors.password,
            NotificationType.Bare, { theClass: 'outline primary', timeOut: 6000, showProgressBar: false });
      }
    );
  }
}
