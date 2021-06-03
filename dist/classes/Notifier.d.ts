import { INotifier } from '../interfaces';
import { Observable } from "rxjs";
export declare class Notifier implements INotifier {
    private readonly notifier;
    constructor(notifier: INotifier);
    static createNotifier(useClass?: INotifier): Notifier;
    error(...args: any[]): <T>(source: Observable<T>) => Observable<T>;
    notify(...args: any[]): <T>(source: Observable<T>) => Observable<T>;
    success(...args: any[]): <T>(source: Observable<T>) => Observable<T>;
    warning(...args: any[]): <T>(source: Observable<T>) => Observable<T>;
}
