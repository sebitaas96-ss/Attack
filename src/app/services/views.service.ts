import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import {getIifeBody} from '@angular/compiler-cli/ngcc/src/host/esm2015_host';

const apiUrl = environment.apiUrl;
const prueba = 'vacio';

export interface IUser {
  email: string;
  name: string;
  password: string;
}
export interface IObservable {
  dataType: string;
  data: string;
  message: string;
}

export interface ISubdomains{
  subfinder: any;
  crt_sh: any;
}
@Injectable({
  providedIn: 'root'
})
export class ViewsService {

  constructor(private http: HttpClient) { }

  getData(view: string): Observable<any>{
    const path = `${apiUrl}/results/${view}`;
    return this.http.get<ISubdomains>(path);
  }
  getFeed(view: string): Observable<any>{
    const path = `${apiUrl}/feed/${view}`;
    return this.http.get(path);
  }
  createObservable(data: IObservable): Observable<any>{
    const path = `${apiUrl}/observable`;
    return this.http.post(path, data);
  }
  getCases(): Observable<any>{
    const path = `${apiUrl}/case`;
    return this.http.get(path);
  }
  getObservables(): Observable<any>{
    const path = `${apiUrl}/observable`;
    return this.http.get(path);
  }
  addCase(caseName: string): Observable<any>{
    const path = `${apiUrl}/case`;
    const data = { title: `Created case for ${caseName}`, description: `Created case for ${caseName}`};
    return this.http.post(path, data);
  }
}
