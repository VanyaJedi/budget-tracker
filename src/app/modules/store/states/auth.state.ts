import { CustomError } from '../../shared/models';
import { User } from '../../user/models';

export interface AuthState {
  user: User | null;
  error: CustomError | null;
}

export const authInitialState: AuthState = {
  user: null,
  error: null,
};
