export type UserRole = 'admin' | 'user';

export interface Profile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}
