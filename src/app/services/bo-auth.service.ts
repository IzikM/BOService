
import { HtmlGetService } from './html-get.service';
import { Auth } from './../models/auth';
import { Injectable } from '@angular/core';

@Injectable()

export class BoAuthService {
  auth: Auth;

  constructor(private htmlGetService: HtmlGetService) {
    this.htmlGetService.getInfo('auth', this);
   }

  getAuth() {
     return this.auth;
  }
  takeDataFromGet(authData: Auth) {
    this.auth = authData;
  }
}
