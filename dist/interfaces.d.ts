export interface INotifier {
    success(...args: any[]): void;
    warning(...args: any[]): void;
    error(...args: any[]): void;
    notify(...args: any[]): void;
}
