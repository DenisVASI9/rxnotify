import { Observable } from 'rxjs';
export declare class BaseNotifier {
    protected readonly notifier: any;
    constructor(notifier: any);
    protected makeObservable(args: any, type: string): <T>(source: Observable<T>) => Observable<T>;
    protected callNotifier({ args, type }: {
        args: any;
        type: any;
    }): void;
}
