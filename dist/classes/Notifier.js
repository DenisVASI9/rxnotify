import { ConsoleNotifier } from './ConsoleNotifier';
import { Observable } from "rxjs";
export class Notifier {
    constructor(notifier) {
        this.notifier = notifier;
    }
    static createNotifier(useClass = new ConsoleNotifier()) {
        return new Notifier(useClass);
    }
    error(...args) {
        return (source) => {
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
    notify(...args) {
        return (source) => {
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
    success(...args) {
        return (source) => {
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
    warning(...args) {
        return (source) => {
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
//# sourceMappingURL=Notifier.js.map