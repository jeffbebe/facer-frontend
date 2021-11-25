export interface LoginUserData {
  emailAddress: string;
  password: string;
}

export type AuthStateKeys = Array<
  'login' | 'logout' | 'register' | 'forgotPassword' | 'forgotPasswordSubmit'
>;

export type AuthFetchKeys = AuthStateKeys[number];

export interface AuthState {
  isFetching: AuthStateKeys;
}
