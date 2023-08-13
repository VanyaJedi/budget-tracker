import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadExpence } from 'src/app/modules/store/actions';

@Component({
  selector: 'app-tracker-page',
  templateUrl: './tracker-page.component.html',
  styleUrls: ['./tracker-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrackerPageComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadExpence());
  }
}
