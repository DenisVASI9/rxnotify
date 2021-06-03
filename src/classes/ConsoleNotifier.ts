import { INotifier } from '../interfaces';

export class ConsoleNotifier implements INotifier {
  error(...args: any[]): void {
    console.error(...args);
  }

  notify(...args: any[]): void {
    console.log(...args);
  }

  success(...args: any[]): void {
    console.info(...args);
  }

  warning(...args: any[]): void {
    console.warn(...args);
  }
}
