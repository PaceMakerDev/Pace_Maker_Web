export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

/* global OpenModalAction, CloseModalAction, ToggleModalAction */

export const openModal = (name: string): OpenModalAction => ({
  type: OPEN_MODAL,
  name,
});

export const closeModal = (name: string): CloseModalAction => ({
  type: CLOSE_MODAL,
  name,
});

export const toggleModal = (name: string): ToggleModalAction => ({
  type: TOGGLE_MODAL,
  name,
});
