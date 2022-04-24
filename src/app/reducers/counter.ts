import {
  createAction,
  createFeatureSelector,
  createReducer, createSelector,
  on, props,
} from '@ngrx/store';

export const COUNTER_KEY = 'counter';

export const increase = createAction('[COUNTER] increase');
export const decrease = createAction('[COUNTER] decrease');
export const reset = createAction('[COUNTER] reset');
export const update = createAction(
  '[COUNTER] update',
  props<{updatedAt: number}>()
);

export interface CounterState {
  count: number;
  updatedAt?: number
}

export const initialState: CounterState = {
  count: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(increase, state => ({
    ...state,
    count: state.count + 1
  })),
  on(decrease, state => ({
    ...state,
    count: state.count - 1
  })),
  on(reset, state => ({
    ...state,
    count: 0
  })),
  on(update, (state, action) => ({
    ...state,
    updatedAt: action.updatedAt
  })),
);

export const featureSelector = createFeatureSelector<CounterState>(COUNTER_KEY)

export const countSelector = createSelector(
  featureSelector,
  state => state.count
)

export const updatedAtSelector = createSelector(
  featureSelector,
  state => state.updatedAt
)
