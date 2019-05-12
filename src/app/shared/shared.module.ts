import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginComponent } from './login/login.component';
import { TypeaheadModule } from 'ngx-bootstrap';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from '../helpers/interceptors/http-error.interceptor';

@NgModule({
  declarations: [NavbarComponent, LoginComponent],
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    RouterModule,
    FormsModule,
    TypeaheadModule.forRoot()
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  exports: [NavbarComponent, LoginComponent, FormsModule, TypeaheadModule]
})
export class SharedModule {}
