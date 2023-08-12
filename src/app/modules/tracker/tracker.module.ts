import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackerPageComponent } from './components/tracker-page/tracker-page.component';

@NgModule({
  declarations: [TrackerPageComponent],
  imports: [CommonModule],
  exports: [TrackerPageComponent],
})
export class TrackerModule {}
