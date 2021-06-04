import { from } from 'rxjs';
import { ConsoleNotifier, Notifier } from './index';
const numbers = [1, 2, 3, 4, 5];
const notifier = Notifier.createNotifier();
from(numbers)
    .pipe(notifier.error('Test of error'), notifier.success('Test of success'), notifier.notify('Test of notify'), notifier.warning('Test of warning'))
    .subscribe((res) => {
    console.log(res);
});
class CustomNotifier extends Notifier {
    constructor() {
        super(...arguments);
        this.custom = (...args) => this.makeObservable(args, CustomNotifier.CUSTOM_NOTIFIER);
    }
}
CustomNotifier.CUSTOM_NOTIFIER = 'custom';
class CustomConsoleNotifier extends ConsoleNotifier {
    custom(...args) {
        console.log('Test of custom');
    }
}
const customNotifier = Notifier.createCustomNotifier(CustomConsoleNotifier, CustomNotifier);
from(numbers)
    .pipe(notifier.error('Test of error'), notifier.success('Test of success'), notifier.notify('Test of notify'), notifier.warning('Test of warning'), customNotifier.custom())
    .subscribe((res) => {
    console.log(res);
});
//# sourceMappingURL=example.js.map