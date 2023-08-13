import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Expense } from '../../models/expense.model';
import { MockBackendService } from 'src/app/modules/mock-backend/services';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-expense-table',
  templateUrl: './expense-table.component.html',
  styleUrls: ['./expense-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseTableComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  expenses$ = this.mockBackendService.getExpenses();
  constructor(private mockBackendService: MockBackendService) {}

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

  ngOnInit(): void {
    this.mockBackendService
      .getExpenses()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        if (data) {
          console.log(data);
          this.dataSource = data;
          console.log(this.dataSource);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
