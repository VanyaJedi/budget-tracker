import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { AuthModule } from './modules/auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrackerModule } from './modules/tracker/tracker.module';
import { StoreModule } from '@ngrx/store';
import { AUTH_FEATURE, authReducer } from './modules/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './modules/store/effects';
import {
  EXPENSES_FEATURE,
  expensesReducer,
} from './modules/store/reducers/expenses.reducer';
import { ExpensesEffects } from './modules/store/effects/expenses.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AuthModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
    TrackerModule,
    StoreModule.forRoot(
      {
        [AUTH_FEATURE]: authReducer,
        [EXPENSES_FEATURE]: expensesReducer,
      },
      {}
    ),
    EffectsModule.forRoot([AuthEffects, ExpensesEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
