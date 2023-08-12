import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { login } from 'src/app/modules/store/actions';
import { selectAuthError, selectUser } from 'src/app/modules/store/reducers';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  loginFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginFormGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.store
      .select(selectUser)
      .pipe(takeUntil(this.destroy$))
      .subscribe((user) => {
        if (user) {
          this.router.navigate(['/']);
        }
      });

    this.store
      .select(selectAuthError)
      .pipe(takeUntil(this.destroy$))
      .subscribe((err) => {
        if (err) {
          this.snackBar.open(err.message, 'Close', { duration: 5000 });
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit(evt: Event) {
    evt.preventDefault();
    if (this.loginFormGroup.valid) {
      this.store.dispatch(login(this.loginFormGroup.value));
    }
  }
}
