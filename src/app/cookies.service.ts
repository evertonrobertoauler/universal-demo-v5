import { Injectable, Injector, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import * as Cookies from 'universal-cookie';

@Injectable()
export class CookiesService {

  private cookies: any;

  constructor(
    private injector: Injector,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformServer(this.platformId)) {
      const req = this.injector.get('request');
      this.cookies = new Cookies(req.headers.cookie);
      console.log('server', this.cookies);
    } else {
      this.cookies = new Cookies();
      console.log('browser', this.cookies);
    }
  }

  setCookie(name: string, value: any) {
    return this.cookies.set(name, value);
  }

  getCookie(name: string) {
    return this.cookies.get(name);
  }

}
