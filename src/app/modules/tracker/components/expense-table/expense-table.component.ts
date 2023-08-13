import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Expense } from '../../models/expense.model';
import { Store } from '@ngrx/store';
import { selectExpenses } from 'src/app/modules/store/reducers/expenses.reducer';

@Component({
  selector: 'app-expense-table',
  templateUrl: './expense-table.component.html',
  styleUrls: ['./expense-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseTableComponent {
  expenses$ = this.store.select(selectExpenses);

  constructor(private store: Store) {}

  displayedColumns = [
    'id',
    'description',
    'amount',
    'date',
    'category',
    'paymentMethod',
    'recurring',
    'frequency',
    'tags',
    'receipt',
    'note',
  ];

  dataSource: Expense[] = [];
}
