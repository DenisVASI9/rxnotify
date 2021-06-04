import { from } from 'rxjs';
import { Notifier } from './index';

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
