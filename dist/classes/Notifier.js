import { ConsoleNotifier } from './ConsoleNotifier';
import { BaseNotifier } from './BaseNotifier';
export class Notifier extends BaseNotifier {
    constructor(notifier) {
        super(notifier);
        this.notifier = notifier;
        this.error = (...args) => this.makeObservable(args, Notifier.NOTIFIER_ERROR);
        this.notify = (...args) => this.makeObservable(args, Notifier.NOTIFIER_NOTIFY);
        this.success = (...args) => this.makeObservable(args, Notifier.NOTIFIER_SUCCESS);
        this.warning = (...args) => this.makeObservable(args, Notifier.NOTIFIER_WARNING);
    }
    static createNotifier(UseNotifierMethods = new ConsoleNotifier()) {
        return new Notifier(UseNotifierMethods);
    }
    static createCustomNotifier(UseNotifierMethods = ConsoleNotifier, UseNotifier) {
        return new UseNotifier(new UseNotifierMethods());
    }
}
Notifier.NOTIFIER_ERROR = 'error';
Notifier.NOTIFIER_SUCCESS = 'success';
Notifier.NOTIFIER_NOTIFY = 'notify';
Notifier.NOTIFIER_WARNING = 'warning';
//# sourceMappingURL=Notifier.js.map