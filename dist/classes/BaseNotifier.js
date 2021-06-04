import { Observable } from 'rxjs';
export class BaseNotifier {
    constructor(notifier) {
        this.notifier = notifier;
    }
    makeObservable(args, type) {
        return (source) => {
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
    callNotifier({ args, type }) {
        var _a;
        (_a = this.notifier[type]) === null || _a === void 0 ? void 0 : _a.call(this, ...args);
    }
}
//# sourceMappingURL=BaseNotifier.js.map