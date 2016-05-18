import Immutable from 'immutable';
import {createReducer} from 'redux-immutablejs';

const SET_MENU_STATUS = 'darma-treasure/app/SET_MENU_STATUS';

const initialState = Immutable.Map({
  isMenuOpened: false
});

export default createReducer(initialState, {
  [SET_MENU_STATUS]: (state, action) => state.set('isMenuOpened', action.isMenuOpened)
});

export function setMenuStatus(isMenuOpened) {
  return {
    type: SET_MENU_STATUS,
    isMenuOpened
  };
}
