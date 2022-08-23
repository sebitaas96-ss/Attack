import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarService, ISidebar } from 'src/app/containers/layout/sidebar/sidebar.service';
import {Router} from '@angular/router';
import {TokenService} from '../../shared/token.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit, OnDestroy {
  sidebar: ISidebar;
  subscription: Subscription;
  constructor(private sidebarService: SidebarService , private token: TokenService, private router: Router) {
  }

  ngOnInit(): any {
     if (this.token.isLoggedIn()){
      this.subscription = this.sidebarService.getSidebar().subscribe(
        res => {
          this.sidebar = res;
        },
        err => {
          console.error(`An error occurred: ${err.message}`);
        }
      );
    }else{
      this.router.navigate(['/user/login']);
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
