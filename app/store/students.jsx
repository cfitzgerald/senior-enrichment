import axios from 'axios';

// ACTION TYPE(s)
const GET_STUDENT = 'GET_STUDENT';
const GET_STUDENTS = 'GET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';
// const INPUT_STUDENT_NAME = 'INPUT_STUDENT_NAME';
// const INPUT_STUDENT_EMAIL = 'INPUT_STUDENT_EMAIL';
// const INPUT_STUDENT_CAMPUS = 'INPUT_STUDENT_CAMPUS';

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

export function deleteStudent (id) {
  const action = { type: DELETE_STUDENT, id };
  return action;
}

export function updateStudent (student) {
  const action = { type: UPDATE_STUDENT, student };
  return action;
}

// export function inputStudentName (studentName) {
//   const action = { type: INPUT_STUDENT_NAME, studentName };
//   return action;
// }

// export function inputStudentEmail (studentEmail) {
//   const action = { type: INPUT_STUDENT_EMAIL, studentEmail };
//   return action;
// }

// export function inputStudentCampus (studentCampus) {
//   const action = { type: INPUT_STUDENT_CAMPUS, studentCampus };
//   return action;
// }

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

export function fetchStudentById (id) {

  return function thunk (dispatch) {
    return axios.get(`/api/students/${ id }`)
      .then(res => res.data)
      .then(student => {
        const action = getStudent(student);
        dispatch(action);
      });
  };
}

export function createStudent (student) {

  return function thunk (dispatch) {
    return axios.post('/api/students', student)
      .then(res => res.data)
      .then(student => {
        const action = addStudent(student);
        dispatch(action);
      });
  };
}

export function destroyStudent (id) {

  return function thunk (dispatch) {
    return axios.delete(`/api/students/${ id }`)
      .then(() => {
        const action = deleteStudent(id);
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
      return [...state, action.student];

    case DELETE_STUDENT:
      return state.filter(student => {
        return student.id !== action.id;
      });

    case UPDATE_STUDENT:
      return action.student;

    default:
      return state;
  }

}
