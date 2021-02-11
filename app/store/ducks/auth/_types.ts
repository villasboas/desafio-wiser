export interface AuthState {
  fetching: boolean;
  error: string | null;
  token: string | null;
}
