import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackerPageComponent } from './components/tracker-page/tracker-page.component';
import { ExpenseTableComponent } from './components/expense-table/expense-table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [TrackerPageComponent, ExpenseTableComponent],
  imports: [CommonModule, MatTableModule],
  exports: [TrackerPageComponent],
})
export class TrackerModule {}
