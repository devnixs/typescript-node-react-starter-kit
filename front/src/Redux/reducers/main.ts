import { handleActions } from 'redux-actions';

/**
 * Reducers
 */
export const LOAD_ITEMS = 'LOAD_ITEMS';

export interface IMainBranch {}

export const initialState = {
  main: {},
};

const main = handleActions(
  {
    [`${LOAD_ITEMS}_BEGIN`]: (state: any, action) => {
      console.log('load begin', action.payload);
      let newState = {
        ...state,
        text: {
          ...state.text,
        },
      };

      return newState;
    },

    [`${LOAD_ITEMS}_SUCCESS`]: (state: any, action) => {
      console.log('load success', action.payload);
      let newState = {
        ...state,
        text: {
          ...state.text,
          data: action.payload.origin || '...',
        },
      };

      return newState;
    },
  },
  initialState
);

export { main };
