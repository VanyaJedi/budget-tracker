import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { ExpensesState, expensesInitialState } from '../states';
import { loadExpenceFailure, loadExpenceSuccess } from '../actions';

export const expensesReducer = createReducer(
  expensesInitialState,
  on(
    loadExpenceSuccess,
    (state, { expenses }): ExpensesState => ({
      ...state,
      expenses,
      error: null,
    })
  ),
  on(
    loadExpenceFailure,
    (state, { error }): ExpensesState => ({
      ...state,
      expenses: [],
      error,
    })
  )
);

export const EXPENSES_FEATURE = 'expenses';

export const selectExpensesState =
  createFeatureSelector<ExpensesState>(EXPENSES_FEATURE);

export const selectExpenses = createSelector(
  selectExpensesState,
  (expensesState: ExpensesState) => {
    return expensesState.expenses;
  }
);
