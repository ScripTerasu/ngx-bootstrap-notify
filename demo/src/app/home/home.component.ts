import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import sdk from '@stackblitz/sdk';
import { NgxBootstrapNotifyComponent } from 'ngx-bootstrap-notify';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('sampleNotify') private sampleNotify: NgxBootstrapNotifyComponent;

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Home | ngx-bootstrap-notify');
  }

  editOnStackBlitz() {
    sdk.openGithubProject('ScripTerasu/ngx-bootstrap-notify/tree/master/demo');
  }

  showNotify() {
    this.sampleNotify.show();
  }
}
