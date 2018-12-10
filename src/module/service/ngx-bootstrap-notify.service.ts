import { Injectable } from '@angular/core';
import { INotifySettings } from '../models/notify-settings.model';
import { INotifyOptions } from '../models/notify-options.model';

@Injectable()
export class NgxBootstrapNotifyService {
  getDefaultsNotifyOptions(): INotifyOptions {
    return <INotifyOptions>{ message: '' };
  }

  constructor() { }

  getDefaultsNotifySettings(): INotifySettings {
    return <INotifySettings>{};
  }
}
