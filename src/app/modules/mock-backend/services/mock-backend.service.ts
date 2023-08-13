import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { CommonResponse } from '../models';
import { User } from '../../user/models';
import { EXPENSES } from '../data/expenses';

import { Expense } from '../../tracker/models/expense.model';

@Injectable({
  providedIn: 'root',
})
export class MockBackendService {
  login(username: string, password: string): Observable<CommonResponse<User>> {
    const user = {
      username: username,
    };

    if (username === 'testuser' && password === 'testpassword') {
      return of({
        success: true,
        data: user,
      });
    } else {
      return throwError(() => ({
        success: false,
        message: 'Invalid username or password',
      }));
    }
  }

  getExpenses(): Observable<CommonResponse<Expense[]>> {
    return of({ success: true, data: EXPENSES as unknown as Expense[] });
  }
}
