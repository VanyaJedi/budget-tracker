import { createAction, props } from '@ngrx/store';
import { Expense } from '../../tracker/models/expense.model';
import { CustomError } from '../../shared/models';

export enum ExpenseActionTypes {
  LoadExpence = '[Expence] Load',
  LoadExpenceSuccess = '[Expence] Load success',
  LoadExpenceFailure = '[Expence] Load failure',
}

export const loadExpence = createAction(ExpenseActionTypes.LoadExpence);

export const loadExpenceSuccess = createAction(
  ExpenseActionTypes.LoadExpenceSuccess,
  props<{ expenses: Expense[] }>()
);

export const loadExpenceFailure = createAction(
  ExpenseActionTypes.LoadExpenceFailure,
  props<{ error: CustomError }>()
);
