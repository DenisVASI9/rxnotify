import { from } from 'rxjs';
import { ConsoleNotifier, Notifier } from './index';

const numbers = [1, 2, 3, 4, 5];

// Default
const notifier = Notifier.createNotifier();

from(numbers)
  .pipe(
    notifier.error('Test of error'),
    notifier.success('Test of success'),
    notifier.notify('Test of notify'),
    notifier.warning('Test of warning'),
  )
  .subscribe((res) => {
    console.log(res);
  });

class CustomNotifier extends Notifier {
  static CUSTOM_NOTIFIER = 'custom';

  custom = (...args: any[]) =>
    this.makeObservable(args, CustomNotifier.CUSTOM_NOTIFIER);
}

class CustomConsoleNotifier extends ConsoleNotifier {
  custom(...args) {
    console.log('Test of custom');
  }
}

const customNotifier = Notifier.createCustomNotifier<CustomNotifier>(
  CustomConsoleNotifier,
  CustomNotifier,
);

from(numbers)
  .pipe(
    notifier.error('Test of error'),
    notifier.success('Test of success'),
    notifier.notify('Test of notify'),
    notifier.warning('Test of warning'),
    customNotifier.custom(),
  )
  .subscribe((res) => {
    console.log(res);
  });
