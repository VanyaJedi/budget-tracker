import { Route } from '@angular/router';
import { AuthPageComponent } from './modules/auth/components/auth-page/auth-page.component';
import { TrackerPageComponent } from './modules/tracker/components/tracker-page/tracker-page.component';
import { authGuard } from './modules/auth/guards';

export const appRoutes: Route[] = [
  {
    path: '',
    component: TrackerPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: AuthPageComponent,
  },
];
