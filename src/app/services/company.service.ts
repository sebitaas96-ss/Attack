import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

const apiUrl = environment.apiUrl;

export interface ICompany {
  id: number;
  name?: string;
  email?: string;
  phone?: string;
  description?: string;
}

export interface IUpdateCompany {
  name: string;
  email: string;
  phone: string;
  description: string;

}

export interface ICreateCompany {
  name: string;
  email: string;
  phone: string;
  description: string;
  domains: string[];
  ip: string[];
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    const path = `${apiUrl}/company`;
    return this.http.get<ICompany[]>(path);
  }

  delete(id: string): Observable<any> {
    const path = `${apiUrl}/company/${id}`;
    console.log(path);
    return this.http.delete<ICompany>(path);
  }

  getCompany(id: string): Observable<any> {
    const path = `${apiUrl}/company/${id}`;
    return this.http.get<ICompany>(path);
  }

  // tslint:disable-next-line:variable-name
  edit(obj: ICompany): Observable<any> {
    const path = `${apiUrl}/company/${obj.id}`;
    return this.http.put<ICompany>(path, {
      name: obj.name,
      email: obj.email,
      phone: obj.phone,
      description: obj.description
    });
  }

  create(createDetails: ICreateCompany): Observable<any> {
    const path = `${apiUrl}/company`;
    return this.http.post<ICompany>(path, createDetails);
  }
}
