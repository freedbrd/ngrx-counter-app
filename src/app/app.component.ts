import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly MIN_COUNTER_VALUE = 0;

  counter = 0;
  updatedDate: number;

  increase(): void {
    this.updatedDate = Date.now();
    this.counter++;
  }

  decrease(): void {
    this.updatedDate = Date.now();
    this.counter--;
  }

  reset(): void {
    this.updatedDate = Date.now();
    this.counter = 0;
  }
}
