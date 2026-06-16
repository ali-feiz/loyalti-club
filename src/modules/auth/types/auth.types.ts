export interface User {
  id: number;
  username: string;
  fullName: string;
}

export interface AuthState {
  token: string | null;
  user: User | null;
}
