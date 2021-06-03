"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnackbarNotifier = void 0;
const snack_bar_1 = require("@angular/material/snack-bar");
class SnackbarNotifier {
    constructor() {
        this.snackbar = new snack_bar_1.MatSnackBar();
    }
    error(...args) {
    }
    notify(...args) {
    }
    success(...args) {
    }
    warning(...args) {
    }
}
exports.SnackbarNotifier = SnackbarNotifier;
//# sourceMappingURL=SnackbarNotifier.js.map