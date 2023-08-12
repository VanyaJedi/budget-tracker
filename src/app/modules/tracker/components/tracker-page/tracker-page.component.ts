import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tracker-page',
  templateUrl: './tracker-page.component.html',
  styleUrls: ['./tracker-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrackerPageComponent {}
