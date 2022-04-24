import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {increase, decrease, reset, countSelector, updatedAtSelector} from './reducers/counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly MIN_COUNTER_VALUE = 0;

  count$ = this.store.select(countSelector);
  updatedAt$ = this.store.select(updatedAtSelector);

  constructor(
    private store: Store,
  ) {
  }

  increase(): void {
    this.store.dispatch(increase());
  }

  decrease(): void {
    this.store.dispatch(decrease());
  }

  reset(): void {
    this.store.dispatch(reset());
  }
}
