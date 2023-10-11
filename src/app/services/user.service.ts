import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  signup(data: any) {
    return this.httpClient.post(this.usrl + "user/signup", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }
}
