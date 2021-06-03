"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notifier = void 0;
const ConsoleNotifier_1 = require("./ConsoleNotifier");
const rxjs_1 = require("rxjs");
class Notifier {
    constructor(notifier) {
        this.notifier = notifier;
    }
    static createNotifier(useClass = new ConsoleNotifier_1.ConsoleNotifier()) {
        return new Notifier(useClass);
    }
    error(...args) {
        return (source) => {
            return new rxjs_1.Observable((subscriber) => {
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
            return new rxjs_1.Observable((subscriber) => {
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
            return new rxjs_1.Observable((subscriber) => {
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
            return new rxjs_1.Observable((subscriber) => {
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
exports.Notifier = Notifier;
//# sourceMappingURL=Notifier.js.map