import axios from 'axios';
// import constants from './constants';

// ACTION TYPE(s)
const GET_STUDENT = 'GET_STUDENT';
const GET_STUDENTS = 'GET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';

// ACTION CREATOR(s)
export function getStudent (student) {
  const action = { type: GET_STUDENT, student };
  return action;
}

export function getStudents (students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

export function addStudent (student) {
  const action = { type: ADD_STUDENT, student };
  return action;
}

export function deleteStudent (student) {
  const action = { type: DELETE_STUDENT, student };
  return action;
}

export function updateStudent (student) {
  const action = { type: UPDATE_STUDENT, student };
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

export function postStudent (student, history) {

  return function thunk (dispatch) {
    return axios.post('/api/students', student)
      .then(res => res.data)
      .then(newStudent => {
        dispatch(getStudent(newStudent));
        history.push(`/students/${ newStudent.id }`);
      });
  };
}

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

// REDUCER(s)
export default function reducer (state = [], action) {

  switch (action.type) {

    case GET_STUDENT:
      return action.student;

    case GET_STUDENTS:
      return action.students;

    case ADD_STUDENT:
      return action.student;

    case DELETE_STUDENT:
      return action.student;

    case UPDATE_STUDENT:
      return action.student;

    default:
      return state;
  }

}
