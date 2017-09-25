import axios from 'axios';

// ACTION TYPE(s)
const ADD_STUDENT = 'ADD_STUDENT';

// ACTION CREATOR(s)
export function addStudent (student) {
  const action = { type: ADD_STUDENT, student };
  return action;
}

// THUNK CREATOR(s)
export function createStudent () {

  return function thunk (dispatch) {
    return axios.post('/api/students')
      .then(res => res.data)
      .then(student => {
        const action = addStudent(student);
        dispatch(action);
      });
  };
}

// REDUCER
export default function reducer (state = {}, action) {

  switch (action.type) {

    case ADD_STUDENT:
      return action.student;

    default:
      return state;
  }

}
