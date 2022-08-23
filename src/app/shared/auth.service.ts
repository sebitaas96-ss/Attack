import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {from, Observable} from 'rxjs';

import {environment} from '../../environments/environment';

const apiUrl = environment.apiUrl;


import {getUserRole} from 'src/app/utils/util';
import {HttpClient} from '@angular/common/http';
import {StorageService} from '../services/storage.service';
import {Router} from '@angular/router';

export interface ISignInCredentials {
  email: string;
  password: string;
}

export interface ICreateCredentials {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface IPasswordReset {
  code: string;
  newPassword: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  role: any;

  constructor(private auth: AngularFireAuth, private http: HttpClient, private storageService: StorageService, private router: Router) {
  }

  isAdmin(): boolean {
    return this.role === 'admin';
  }

  // tslint:disable-next-line:typedef
  signIn(credentials: ISignInCredentials): Observable<any> {
    const path = `${apiUrl}/login`;
    // interceptar esta petición para sacar el "role" de usuario si se ha loggeado
    const req = this.http.post(path, credentials);
    req.subscribe(res => {
      this.role = res; // faltaria poner .role cuando este implementado;
    });
    return req;
  }

  // tslint:disable-next-line:typedef
  // signOut() {
  // return from(this.auth.signOut());
  // const path = this.mainPath + '/logout';
  // return this.http.post(path, null);
  // }
  // tslint:disable-next-line:typedef
  register(credentials: ICreateCredentials): Observable<any> {
    const path = `${apiUrl}/register`;
    return this.http.post(path, credentials);

  }

  // tslint:disable-next-line:typedef
  sendPasswordEmail(email) {
    email = 'vadim94t@gmail.com';
    return this.auth.sendPasswordResetEmail(email).then(() => {
      return true;
    });
  }

  // tslint:disable-next-line:typedef
  resetPassword(credentials: IPasswordReset) {
    return this.auth
      .confirmPasswordReset(credentials.code, credentials.newPassword)
      .then((data) => {
        return data;
      });
  }

  // tslint:disable-next-line:typedef
  async getUser() {
    const u = await this.auth.currentUser;
    return {...u, role: getUserRole()};
  }

  getUserData(): any {
    return this.storageService.get('user');
  }

  logout(): void {
    this.storageService.clear();
    this.router.navigate(['/user/login']);
  }
}
