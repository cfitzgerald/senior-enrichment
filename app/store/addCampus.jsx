import axios from 'axios';
// import constants from './constants';

// ACTION TYPE(s)
const ADD_CAMPUS = 'ADD_CAMPUS';

// ACTION CREATOR(s)
export function addCampus (campus) {
  const action = { type: ADD_CAMPUS, campus };
  return action;
}

// THUNK CREATOR(s)
export function createCampus () {

  return function thunk (dispatch) {
    return axios.post('/api/campuses')
      .then(res => res.data)
      .then(campus => {
        const action = addCampus(campus);
        dispatch(action);
      });
  };
}

// REDUCER
export default function reducer (state = {}, action) {

  switch (action.type) {

    case ADD_CAMPUS:
      return action.campus;

    default:
      return state;
  }

}
