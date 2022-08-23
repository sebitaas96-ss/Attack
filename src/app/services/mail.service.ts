import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class MailService{

  constructor(private http: HttpClient) { }

  sendEmail(message: string): Observable<any>{
      const path = `${apiUrl}/contact/help`;
      return this.http.post<string>(path, {message});
  }

}
