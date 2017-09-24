import axios from 'axios';

// ACTION TYPE(s)

const GET_STUDENTS = 'GET_STUDENTS';

// ACTION CREATOR(s)

export function getStudents (students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

// THUNK CREATOR(s)

export function fetchStudents () {

  return function thunk (dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action);
      });
  };
}

// REDUCER(s)

export default function reducer (state = [], action) {

  switch (action.type) {

    case GET_STUDENTS:
      return action.students;

    default:
      return state;
  }

}
