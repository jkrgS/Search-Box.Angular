import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  // mock log in - keeping the user name in local storage
  login(model: any) {
    localStorage.setItem('username', model.username);
  }

  // is checkin the login status
  loggedIn() {
    return localStorage.getItem('username');
  }

  // deletes the user name from local storage
  logout() {
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
}
