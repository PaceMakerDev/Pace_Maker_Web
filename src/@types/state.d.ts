declare module 'State' {
  import { User } from "User";

  export interface AuthState {
    isLogined: boolean;
    user?: User;
  }
}