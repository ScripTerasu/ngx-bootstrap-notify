import { UpdateCommands } from './update-commands.model';
import { JQueryStatic } from './jquery-static.model';

export interface INotifyReturn {
    $ele: JQueryStatic;
    close(): void;
    update(commands: UpdateCommands | Record<string, any>): void;
    update(command: string, update: any): void;
}
