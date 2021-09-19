/* global User */

declare interface AuthState {
  isLogined: boolean;
  user?: User;
}

declare interface ModalState {
  isShow: boolean;
  name: string;
}
