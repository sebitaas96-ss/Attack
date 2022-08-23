import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {StorageService} from './storage.service';

const apiUrl = environment.apiUrl;

export interface IUser {
  email: string;
  name: string;
  password: string;
}

export interface IUpdateUser {
  name: string;
  password: string;
  password_confirmation: string;
}

export interface UserInterface {
  id: any;
  name?: string;
  password?: string;
  password_confirmation?: string;
  company_id?: string;
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {
  }

  getAll(): Observable<any> {
    const path = `${apiUrl}/user`;
    return this.http.get<IUser[]>(path);
  }

  delete(id: string): Observable<any> {
    const path = `${apiUrl}/user/` + id;
    console.log(path);
    return this.http.delete<IUser>(path);
  }

  getUser(id: string): Observable<any> {
    const path = `${apiUrl}/user/${id}`;
    return this.http.get<IUser>(path);
  }

  // tslint:disable-next-line:variable-name
  edit(data: UserInterface): Observable<any> {
    const path = `${apiUrl}/user/${data.id}`;
    return this.http.put<IUser>(path, data);
  }

  handleData(data): any {
    localStorage.setItem('user', data);
    localStorage.setItem('company', data.company);
  }

  getUserData(): any {
    return this.storageService.get('user');
  }

  getCompany(): any {
    return localStorage.getItem('company');
  }

  isValidCompany(): boolean {
    const company = this.getCompany();
    let response = false;
    if (company) {
      response = true;
    }
    return response;
  }

  removeData(): any {
    localStorage.removeItem('user_id');
    localStorage.removeItem('company');
  }

  isAdmin(): boolean {
    return this.storageService.get('role') === 'admin';
  }
}
