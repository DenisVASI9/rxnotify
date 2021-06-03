## Description
A simple wrapper for notification/logging operations inside rxjs pipe

## Basic usage
```typescript
import { from } from 'rxjs';
import { Notifier } from './index';

const numbers = [1, 2, 3, 4, 5];

const notifier = Notifier.createNotifier();

from(numbers)
    .pipe(
        notifier.error('Test error'),
        notifier.success('Test success'),
        notifier.notify('Test notify'),
        notifier.warning('Test warning'),
    )
    .subscribe((res) => {
        console.log(res);
    });

```

## Use with your logger/notification manager
```typescript
import { from } from 'rxjs';
import { Notifier, INotifier } from './index';

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

const numbers = [1, 2, 3, 4, 5];

const notifier = Notifier.createNotifier(new ConsoleNotifier());

from(numbers)
    .pipe(
        notifier.error('Test error'),
        notifier.success('Test success'),
        notifier.notify('Test notify'),
        notifier.warning('Test warning'),
    )
    .subscribe((res) => {
        console.log(res);
    });
```

## Use with angular material

```typescript
// notifier.service.ts
import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Notifier, INotifier} from "rxnotify";

class SnackbarNotifier implements INotifier {
  constructor(private _snackBar: MatSnackBar) {
  }

  error(message: string): void {
    this._snackBar.open(message, 'Close', {
      duration: 5000,
    });
  }

  notify(message: string): void {
    this._snackBar.open(message, 'Close', {
      duration: 5000,
    });
  }

  success(message: string): void {
    this._snackBar.open(message, 'Close', {
      duration: 5000,
    });
  }

  warning(message: string): void {
    this._snackBar.open(message, 'Close', {
      duration: 5000,
    });
  }
}

@Injectable()
export class NotifierService extends Notifier {
  constructor(private _snackBar: MatSnackBar) {
    super(new SnackbarNotifier(_snackBar));
  }
}

// app.controller.ts
import {Component, OnInit} from '@angular/core';
import {NotifierService} from "../services/notifier.service";
import { HttpClient } from '@angular/common/http';
import {catchError} from "rxjs/operators";
import {EMPTY} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-tour-of-heroes';

  constructor(private readonly notifier: NotifierService, private readonly httpClient: HttpClient) {
  }

  testFetch() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1').pipe(
      this.notifier.success("Request successful"),
      catchError(() => EMPTY.pipe(
        this.notifier.error("Request failure"),
      ))
    )
  }

  ngOnInit() {
    this.testFetch().subscribe((res) => {
      console.log(res);
    })
  }
}

```



