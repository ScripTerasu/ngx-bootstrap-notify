import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBootstrapNotifyModule } from 'ngx-bootstrap-notify';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        NgxBootstrapNotifyModule.forRoot(),
        HomeRoutingModule,
    ],
    declarations: [HomeComponent],
})
export class HomeModule { }
