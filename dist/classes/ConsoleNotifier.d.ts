import { INotifier } from '../interfaces';
export declare class ConsoleNotifier implements INotifier {
    error(...args: any[]): void;
    notify(...args: any[]): void;
    success(...args: any[]): void;
    warning(...args: any[]): void;
}
