import { Component, OnInit, Renderer2, AfterViewInit } from '@angular/core';
import { LangService } from './shared/lang.service';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import {AuthStateService} from './shared/auth-state.service';
import {Router} from '@angular/router';
import {TokenService} from './shared/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

@Injectable()
export class AppComponent implements OnInit, AfterViewInit {
  isMultiColorActive = environment.isMultiColorActive;
  isSignedIn: boolean;
  constructor(private langService: LangService, private renderer: Renderer2, private auth: AuthStateService,
              public router: Router, public token: TokenService) {

  }

  ngOnInit(): void {
    this.langService.init();
    this.auth.userAuthState.subscribe(val => {
      this.isSignedIn = val;
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.renderer.addClass(document.body, 'show');
    }, 1000);
    setTimeout(() => {
      this.renderer.addClass(document.body, 'default-transition');
    }, 1500);
  }

  signOut(): void {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
  }

}
