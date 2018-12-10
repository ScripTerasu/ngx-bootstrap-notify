
import {
  Component,
  OnChanges,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from '@angular/core';
import { OnShowEvent, OnShownEvent, OnCloseEvent, OnClosedEvent } from './../ngx-bootstrap-notify-events';
import { NgxBootstrapNotifyService } from '../service/ngx-bootstrap-notify.service';
import { INotifyOptions } from '../models/notify-options.model';
import { INotifySettings } from '../models/notify-settings.model';
import { INotifyReturn } from '../models/notify-return.model';
import { UpdateCommands } from '../models/update-commands.model';

declare var $: any;

@Component({
  selector: 'ngx-bootstrap-notify',
  templateUrl: './ngx-bootstrap-notify.component.html',
  styleUrls: ['./ngx-bootstrap-notify.component.scss']
})
export class NgxBootstrapNotifyComponent implements OnChanges, OnDestroy {
  @Input() public message: INotifyOptions['message'];
  @Input() public title: INotifyOptions['title'];
  @Input() public icon: INotifyOptions['icon'];
  @Input() public url: INotifyOptions['url'];
  @Input() public target: INotifyOptions['target'];

  @Input() public element: INotifySettings['element'];
  @Input() public position: INotifySettings['position'];
  @Input() public type: INotifySettings['type'];
  @Input() public allow_dismiss: INotifySettings['allow_dismiss'];
  @Input() public allow_duplicates: INotifySettings['allow_duplicates'];
  @Input() public newest_on_top: INotifySettings['newest_on_top'];
  @Input() public showProgressbar: INotifySettings['showProgressbar'];
  @Input() public offset: INotifySettings['offset'];
  @Input() public spacing: INotifySettings['spacing'];
  @Input() public z_index: INotifySettings['z_index'];
  @Input() public delay: INotifySettings['delay'];
  @Input() public timer: INotifySettings['timer'];
  @Input() public url_target: INotifySettings['url_target'];
  @Input() public mouse_over: INotifySettings['mouse_over'];
  @Input() public icon_type: INotifySettings['icon_type'];
  @Input() public template: INotifySettings['template'];

  @Output() public readonly OnShow = new EventEmitter<OnShowEvent>();
  @Output() public readonly OnShown = new EventEmitter<OnShownEvent>();
  @Output() public readonly OnClose = new EventEmitter<OnCloseEvent>();
  @Output() public readonly OnClosed = new EventEmitter<OnClosedEvent>();

  @Input() public set options(options: INotifyOptions) {
    Object.assign(this, options);
    Object.keys(options).forEach(this.markTouched);
  }

  public get options(): INotifyOptions {
    const options: INotifyOptions = { message: '' };
    this.touchedProps.forEach(prop => {
      options[prop] = (this as { [prop: string]: any })[<string>prop];
    });
    return options;
  }

  @Input() public set settings(settings: INotifySettings) {
    Object.assign(this, settings);
    Object.keys(settings).forEach(this.markTouched);
  }

  public get settings(): INotifySettings {
    const settings: INotifySettings = {};
    this.touchedProps.forEach(prop => {
      settings[prop] = (this as { [prop: string]: any })[<string>prop];
    });
    return settings;
  }

  private isCurrentlyShown = false;
  private currentNotify: INotifyReturn;
  private readonly touchedProps = new Set<keyof INotifyOptions>();
  private readonly markTouched = this.touchedProps.add.bind(this.touchedProps);

  constructor(private bootstrapNotifyService: NgxBootstrapNotifyService) { }

  public ngOnChanges(changes: SimpleChanges): void {
    Object.keys(changes)
      .filter(prop => prop !== 'options')
      .forEach(this.markTouched);
  }

  public ngOnDestroy(): void {
    if (this.isCurrentlyShown) {
      $.notifyClose();
    }
  }


  public show(): INotifyReturn {
    const options: INotifyOptions = {
      // => Merge with the default module-level options
      ...this.bootstrapNotifyService.getDefaultsNotifyOptions(),
      // => Merge with calculated options set for that specific notify
      ...this.options,
    };

    const settings: INotifySettings = {
      // => Merge with the default module-level options
      ...this.bootstrapNotifyService.getDefaultsNotifySettings(),

      // => Merge with calculated options set for that specific notify
      ...this.settings,
      onShow: (element) => {
        this.isCurrentlyShown = true;
        this.OnShow.emit({ element });
      },
      onShown: (element) => {
        this.OnShown.emit({ element });
      },
      onClose: (element) => {
        this.isCurrentlyShown = false;
        this.OnClose.emit({ element });
      },
      onClosed: (element) => {
        this.OnClosed.emit({ element });
      },
    };

    this.currentNotify = $.notify(options, settings);
    return this.currentNotify;
  }

  public close(): void {
    this.currentNotify.close();
    $.notifyClose();
  }

  public update(commands: UpdateCommands): void {
    this.currentNotify.update(commands);
  }
}
