import { INotifier } from '../interfaces';
import { ConsoleNotifier } from './ConsoleNotifier';
import { BaseNotifier } from './BaseNotifier';
export declare class Notifier extends BaseNotifier implements INotifier {
    protected readonly notifier: INotifier;
    constructor(notifier: INotifier);
    static createNotifier(UseNotifierMethods?: INotifier): Notifier;
    static createCustomNotifier<T extends Notifier = Notifier>(UseNotifierMethods: typeof ConsoleNotifier, UseNotifier: new (...args: any[]) => T): T;
    static NOTIFIER_ERROR: string;
    static NOTIFIER_SUCCESS: string;
    static NOTIFIER_NOTIFY: string;
    static NOTIFIER_WARNING: string;
    error: (...args: any[]) => <T>(source: import("rxjs").Observable<T>) => import("rxjs").Observable<T>;
    notify: (...args: any[]) => <T>(source: import("rxjs").Observable<T>) => import("rxjs").Observable<T>;
    success: (...args: any[]) => <T>(source: import("rxjs").Observable<T>) => import("rxjs").Observable<T>;
    warning: (...args: any[]) => <T>(source: import("rxjs").Observable<T>) => import("rxjs").Observable<T>;
}
