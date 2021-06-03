"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const index_1 = require("./index");
const numbers = [1, 2, 3, 4, 5];
const notifier = index_1.Notifier.createNotifier();
rxjs_1.from(numbers)
    .pipe(notifier.error('Test of error'), notifier.success('Test of success'), notifier.notify('Test of notify'), notifier.warning('Test of warning'))
    .subscribe((res) => {
    console.log(res);
});
//# sourceMappingURL=example.js.map