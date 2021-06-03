import { INotifier } from '../interfaces';

export class ConsoleNotifier implements INotifier {
  error(...args): void {
    console.error(...args);
  }

  notify(...args): void {
    console.log(...args);
  }

  success(...args): void {
    console.info(...args);
  }

  warning(...args): void {
    console.warn(...args);
  }
}
