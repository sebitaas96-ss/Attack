import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarService, ISidebar } from 'src/app/containers/layout/sidebar/sidebar.service';
import {Router} from '@angular/router';
import {TokenService} from '../../shared/token.service';
import {environment} from '../../../environments/environment';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  sidebar: ISidebar;
  subscription: Subscription;
  constructor(private sidebarService: SidebarService , private token: TokenService,
              private router: Router, private user: UserService) {
  }

  ngOnInit(): any {
    if (this.token.isLoggedIn()){
      if (this.user.isValidCompany()) {
        this.subscription = this.sidebarService.getSidebar().subscribe(
          res => {
            this.sidebar = res;
          },
          err => {
            console.error(`An error occurred: ${err.message}`);
          }
        );
      }else{
        this.router.navigate(['/app/createCompany']);
      }
    }else{
      this.router.navigate([environment.login]);
    }

  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
