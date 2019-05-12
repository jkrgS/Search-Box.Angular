import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;

  constructor(private authServise: AuthService, private router: Router) {}

  ngOnInit() {
    if (this.loggedIn()) {
      this.router.navigate(['/search']);
    }
  }

  // Login the user "Mock"
  login(model: any) {
    this.authServise.login(model);
    this.router.navigate(['/search']);
  }

  // checking if user is logged in
  loggedIn() {
    return this.authServise.loggedIn();
  }
}
