import { INotifier } from '../interfaces';
import { ConsoleNotifier } from './ConsoleNotifier';
import { BaseNotifier } from './BaseNotifier';

export class Notifier extends BaseNotifier implements INotifier {
  constructor(protected readonly notifier: INotifier) {
    super(notifier);
  }

  static createNotifier(UseNotifierMethods: INotifier = new ConsoleNotifier()) {
    return new Notifier(UseNotifierMethods);
  }

  static createCustomNotifier<T extends Notifier = Notifier>(
    UseNotifierMethods = ConsoleNotifier,
    UseNotifier: new (...args: any[]) => T,
  ): T {
    return new UseNotifier(new UseNotifierMethods());
  }

  static NOTIFIER_ERROR = 'error';
  static NOTIFIER_SUCCESS = 'success';
  static NOTIFIER_NOTIFY = 'notify';
  static NOTIFIER_WARNING = 'warning';

  error = (...args: any[]) =>
    this.makeObservable(args, Notifier.NOTIFIER_ERROR);

  notify = (...args: any[]) =>
    this.makeObservable(args, Notifier.NOTIFIER_NOTIFY);

  success = (...args: any[]) =>
    this.makeObservable(args, Notifier.NOTIFIER_SUCCESS);

  warning = (...args: any[]) =>
    this.makeObservable(args, Notifier.NOTIFIER_WARNING);
}
