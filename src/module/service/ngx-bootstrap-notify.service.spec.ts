import { TestBed, inject } from '@angular/core/testing';

import { NgxBootstrapNotifyService } from './ngx-bootstrap-notify.service';

describe('LibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxBootstrapNotifyService]
    });
  });

  it('should create service', inject([NgxBootstrapNotifyService], (service: NgxBootstrapNotifyService) => {
    expect(service).toBeTruthy();
  }));

  it('should say hello to stranger', inject([NgxBootstrapNotifyService], (service: NgxBootstrapNotifyService) => {
    expect(service.sayHello()).toBe('Hello Stanger!');
  }));

 it('should say hello to provided user', inject([NgxBootstrapNotifyService], (service: NgxBootstrapNotifyService) => {
    expect(service.sayHello('ng-hacker')).toBe('Hello ng-hacker!');
  }));
});
