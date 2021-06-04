import { INotifier } from '../interfaces';
import { ConsoleNotifier } from './ConsoleNotifier';
import { Observable } from 'rxjs';

export class Notifier implements INotifier {
  constructor(private readonly notifier: INotifier) {}

  static createNotifier(useClass: INotifier = new ConsoleNotifier()): Notifier {
    return new Notifier(useClass);
  }

  static NOTIFIER_ERROR = 'error';
  static NOTIFIER_SUCCESS = 'success';
  static NOTIFIER_NOTIFY = 'notify';
  static NOTIFIER_WARNING = 'warning';

  protected makeObservable(args, type) {
    return <T>(source: Observable<T>): Observable<T> => {
      return new Observable((subscriber) => {
        source.subscribe({
          next: (value) => {
            this.callNotifier({ args, type });
            subscriber.next(value);
          },
          error(error) {
            subscriber.error(error);
          },
          complete() {
            subscriber.complete();
          },
        });
      });
    };
  }

  protected callNotifier({ args, type }) {
    this.notifier[type]?.call(this, ...args);
  }

  error = (...args: any[]) =>
    this.makeObservable(args, Notifier.NOTIFIER_ERROR);

  notify = (...args: any[]) =>
    this.makeObservable(args, Notifier.NOTIFIER_NOTIFY);

  success = (...args: any[]) =>
    this.makeObservable(args, Notifier.NOTIFIER_SUCCESS);

  warning = (...args: any[]) =>
    this.makeObservable(args, Notifier.NOTIFIER_WARNING);
}
