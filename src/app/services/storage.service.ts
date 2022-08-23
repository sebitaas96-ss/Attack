import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  set(fieldName: string, data: any): void {
    localStorage.setItem(fieldName, JSON.stringify(data));
  }

  get(fieldName: string): any {
    let data = localStorage.getItem(fieldName);
    try {
      data = JSON.parse(data);
    } catch (e) {
    }
    return data;
  }

  remove(fieldName: string): void {
    localStorage.removeItem(fieldName);
  }
  clear(): void {
    localStorage.clear();
  }
}
