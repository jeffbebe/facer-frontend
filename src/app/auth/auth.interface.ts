import { User } from '../shared/services/amplify.service';

export interface UserLoginData {
  emailAddress: string;
  password: string;
}

export interface UserRegisterData {
  emailAddress: string;
  password: string;
}

export type AuthStateKeys = Array<'login' | 'register'>;

export type AuthFetchKeys = AuthStateKeys[number];

export interface AuthState {
  isFetching: AuthStateKeys;
  user: User;
}
