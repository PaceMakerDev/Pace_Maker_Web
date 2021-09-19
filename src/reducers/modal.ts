import { OPEN_MODAL, CLOSE_MODAL, TOGGLE_MODAL } from 'actions/modal';

/* global ModalState, OpenModalAction, CloseModalAction, ToggleModalAction */

const initState: ModalState = {
  isShow: false,
  name: '',
};

export const modalReducer = (
  state = initState,
  action: OpenModalAction | CloseModalAction | ToggleModalAction
): ModalState => {
  switch (action.type) {
    case OPEN_MODAL:
      return { isShow: true, name: action.name };
    case CLOSE_MODAL:
      return { isShow: false, name: action.name };
    case TOGGLE_MODAL:
      return { isShow: !state.isShow, name: action.name };
    default:
      return state;
  }
};
