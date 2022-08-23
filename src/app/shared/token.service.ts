import { Injectable } from '@angular/core';
import {StorageService} from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(private storageService: StorageService) { }
  // tslint:disable-next-line:typedef
  handleData(token){
     // this.storage.set('auth_token', token);
     localStorage.setItem('auth_token', token);
  }
  // tslint:disable-next-line:typedef
  getToken(){
    return this.storageService.get('auth_token');
  }

  // Verify the token
  isValidToken(): any{
    const token = this.getToken();
    let response = false;

    if (token){
      const payload = this.payload(token);
      if (payload){
        response = true;
      }
    }
    return response;
  }
  // tslint:disable-next-line:typedef
  payload(token) {
    const jwtPayload = token.split('|')[1];
    return jwtPayload;
  }

  // User state based on valid token
  // tslint:disable-next-line:typedef
  isLoggedIn() {
    return this.isValidToken();
  }

  // Remove token
  // tslint:disable-next-line:typedef
  removeToken(){
    localStorage.removeItem('auth_token');
  }
}
