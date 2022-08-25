import { Permission } from './Permission';

export interface IUser {
  email: string | null;
  id: string | null;
  firstName: string | null;
  permission: Permission | null;
  isLoggedIn: boolean;
  avatar: string | null;
}