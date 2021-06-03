import { INotifier } from "../interfaces";
import { MatSnackBar } from "@angular/material/snack-bar";
export declare class SnackbarNotifier implements INotifier {
    snackbar: MatSnackBar;
    constructor();
    error(...args: any[]): void;
    notify(...args: any[]): void;
    success(...args: any[]): void;
    warning(...args: any[]): void;
}
