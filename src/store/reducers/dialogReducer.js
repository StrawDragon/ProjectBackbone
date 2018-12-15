import { createReducer } from 'redux-act';
import { openDialog, closeDialog } from 'actions';

const initialState = {
  isOpen: false,
};

const dialogReducer = createReducer(
  {
    [openDialog]: (state, data) => {
      return { ...state, isOpen: true, ...data };
    },
    [closeDialog]: state => {
      return { ...state, isOpen: false };
    },
  },
  initialState
);

export default dialogReducer;
