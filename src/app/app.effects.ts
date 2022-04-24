import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {decrease, increase, reset, update} from "./reducers/counter";
import {map} from "rxjs/operators";

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions
  ) {
  }

  updatedAt = createEffect(
    () => this.actions$.pipe(
      ofType(increase, decrease, reset),
      map(() => update({updatedAt: Date.now()}))
    ),
  )
}
