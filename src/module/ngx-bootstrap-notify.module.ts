import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { NgxBootstrapNotifyComponent } from './component/ngx-bootstrap-notify.component';
import { NgxBootstrapNotifyService } from './service/ngx-bootstrap-notify.service';

// Export module's public API
export { NgxBootstrapNotifyComponent } from './component/ngx-bootstrap-notify.component';
export { NgxBootstrapNotifyService } from './service/ngx-bootstrap-notify.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NgxBootstrapNotifyComponent],
  declarations: [NgxBootstrapNotifyComponent]
})
export class NgxBootstrapNotifyModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxBootstrapNotifyModule,
      providers: [NgxBootstrapNotifyService]
    };
  }
}
