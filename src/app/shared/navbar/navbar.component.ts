import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  username = <any>[];
  navRoutes = [
    { linkName: 'Home', url: '/search', icon: 'home' }
  ];

  constructor(private authServise: AuthService) { }

  ngOnInit() {
    if (localStorage.getItem('username')) {
      this.username = localStorage.getItem('username');
    }
  }

  // checking if user is logged in
  loggedIn() {
    this.username = localStorage.getItem('username');
    return this.authServise.loggedIn();
  }

  logout() {
    this.authServise.logout();
  }

}
