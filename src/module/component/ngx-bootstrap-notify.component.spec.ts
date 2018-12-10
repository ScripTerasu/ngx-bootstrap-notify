import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgxBootstrapNotifyComponent } from './ngx-bootstrap-notify.component';

describe('LibComponent', function () {
  let de: DebugElement;
  let comp: NgxBootstrapNotifyComponent;
  let fixture: ComponentFixture<NgxBootstrapNotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxBootstrapNotifyComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBootstrapNotifyComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('p.description'));
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have expected <p> text', () => {
    fixture.detectChanges();
    const p = de.nativeElement;
    const description = 'Angular library built with ❤ using ngx-library yeoman generator.';
    expect(p.textContent).toEqual(description);
  });
});
