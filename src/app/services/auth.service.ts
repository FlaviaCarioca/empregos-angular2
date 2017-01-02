import { Injectable } from '@angular/core';
import { ApiService } from '.././services/api.service';


@Injectable()
export class AuthService{
  constructor(private apiService: ApiService){}

  login(username, password): any{
    return this.apiService.post('/auth', { 'username': username, 'password': password });
  }

  logout(): void{
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userType');
    sessionStorage.removeItem('username');
  }

  isLoggedIn(): boolean{
    if(sessionStorage.getItem('token')){
      return true;
    } else {
      return false;
    }
  }

  getUser(): string {
    return sessionStorage.getItem('username') || '';
  }
}