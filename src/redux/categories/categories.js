// categories.js

// Actions
const CHECKING_STATUS = 'CHECKING_STATUS';

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    // do reducer stuff
    case CHECKING_STATUS:
      return 'Under Construction';
    default: return state;
  }
}

// Action Creators
export function checkingStatus() {
  return { type: CHECKING_STATUS };
}
