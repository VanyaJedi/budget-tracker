import { CustomError } from '../../shared/models';
import { Expense } from '../../tracker/models/expense.model';

export interface ExpensesState {
  expenses: Expense[];
  error: CustomError | null;
}

export const expensesInitialState: ExpensesState = {
  expenses: [],
  error: null,
};
