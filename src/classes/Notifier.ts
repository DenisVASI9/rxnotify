import { INotifier } from '../interfaces';
import { ConsoleNotifier } from './ConsoleNotifier';
import { Observable } from 'rxjs';

export class Notifier implements INotifier {
  constructor(private readonly notifier: INotifier) {}

  static createNotifier(useClass: INotifier = new ConsoleNotifier()): Notifier {
    return new Notifier(useClass);
  }

  error(...args: any[]) {
    return <T>(source: Observable<T>): Observable<T> => {
      return new Observable((subscriber) => {
        source.subscribe({
          next: (value) => {
            this.notifier.error(...args);
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

  notify(...args: any[]) {
    return <T>(source: Observable<T>): Observable<T> => {
      return new Observable((subscriber) => {
        source.subscribe({
          next: (value) => {
            this.notifier.notify(...args);
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

  success(...args: any[]) {
    return <T>(source: Observable<T>): Observable<T> => {
      return new Observable((subscriber) => {
        source.subscribe({
          next: (value) => {
            this.notifier.success(...args);
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

  warning(...args: any[]) {
    return <T>(source: Observable<T>): Observable<T> => {
      return new Observable((subscriber) => {
        source.subscribe({
          next: (value) => {
            this.notifier.warning(...args);
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
}
