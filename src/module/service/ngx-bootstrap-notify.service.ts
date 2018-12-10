import { Injectable } from '@angular/core';

@Injectable()
export class NgxBootstrapNotifyService {
  constructor() { }
  sayHello(name?: String) {
    return `Hello ${name || 'Stanger'}!`;
  }
}
