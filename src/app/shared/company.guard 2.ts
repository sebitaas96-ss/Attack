import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {UserService} from '../services/user.service';

@Injectable({providedIn: 'root'})
export class CompanyGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router, private userService: UserService) {
  }

  async canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return this.checkIfUserHasCompany();
  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.checkIfUserHasCompany();
  }

  private checkIfUserHasCompany(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let response = true;
      if (!this.userService.getCompany()) {
        response = false;
        this.router.navigate(['/createCompany']);
      }
      resolve(response);
    });
  }
}
