import { TestBed, inject } from '@angular/core/testing';

import { NgxBootstrapNotifyService } from './ngx-bootstrap-notify.service';

describe('NgxBootstrapNotifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxBootstrapNotifyService]
    });
  });

  it('should create service', inject([NgxBootstrapNotifyService], (service: NgxBootstrapNotifyService) => {
    expect(service).toBeTruthy();
  }));

});
