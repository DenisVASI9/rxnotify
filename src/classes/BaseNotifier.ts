import { Observable } from 'rxjs';

export class BaseNotifier {
  constructor(protected readonly notifier) {}

  protected makeObservable(args, type: string) {
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
}
