"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleNotifier = void 0;
class ConsoleNotifier {
    error(...args) {
        console.error(...args);
    }
    notify(...args) {
        console.log(...args);
    }
    success(...args) {
        console.info(...args);
    }
    warning(...args) {
        console.warn(...args);
    }
}
exports.ConsoleNotifier = ConsoleNotifier;
//# sourceMappingURL=ConsoleNotifier.js.map