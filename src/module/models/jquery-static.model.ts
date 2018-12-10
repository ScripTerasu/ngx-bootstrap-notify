import { INotifyOptions } from './notify-options.model';
import { INotifySettings } from './notify-settings.model';
import { INotifyReturn } from './notify-return.model';

export interface JQueryStatic {
    /* tslint:enable: interface-name */
    notify(message: string): INotifyReturn;
    notify(opts: INotifyOptions, settings?: INotifySettings): INotifyReturn;
    notifyDefaults(settings: INotifySettings): void;
    notifyCloseAll(): void;
    notifyClose(command: string): void;
}
