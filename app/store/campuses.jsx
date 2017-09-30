import axios from 'axios';
// import constants from './constants';

// ACTION TYPE(s)
const GET_CAMPUS = 'GET_CAMPUS';
const GET_CAMPUSES = 'GET_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';


// ACTION CREATOR(s)
export function getCampus (campus) {
  const action = { type: GET_CAMPUS, campus };
  return action;
}

export function getCampuses (campuses) {
  const action = { type: GET_CAMPUSES, campuses };
  return action;
}

export function addCampus (campus) {
  const action = { type: ADD_CAMPUS, campus };
  return action;
}

export function deleteCampus (id) {
  const action = { type: DELETE_CAMPUS, id };
  return action;
}

export function updateCampus (campus) {
  const action = { type: UPDATE_CAMPUS, campus };
  return action;
}

// THUNK CREATOR(s)
export function fetchCampuses () {

  return function thunk (dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses);
        dispatch(action);
      });
  };
}

export function fetchCampusById (id) {

  return function thunk (dispatch) {
    return axios.get(`/api/campuses/${ id }`)
      .then(res => res.data)
      .then(campus => {
        const action = getCampus(campus);
        dispatch(action);
      });
  };
}

export function createCampus (campus) {

  return function thunk (dispatch) {
    return axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(campus => {
        const action = addCampus(campus);
        dispatch(action);
      });
  };
}

export function destroyCampus (id) {
  // console.log('store/campuses: destroyCampus(id) =', id);

  return function thunk (dispatch) {
    return axios.delete(`/api/campuses/${ id }`)
      .then(() => {
        const action = deleteCampus(id);
        dispatch(action);
      });
  };
}

// REDUCER(s)
export default function reducer (state = [], action) {

  switch (action.type) {

    case GET_CAMPUS:
      return action.campus;

    case GET_CAMPUSES:
      return action.campuses;

    case ADD_CAMPUS:
      return [...state, action.campus];

    case DELETE_CAMPUS:
      return state.filter(campus => {
        return campus.id !== action.id;
      });

    case UPDATE_CAMPUS:
      return action.campus;

    default:
      return state;
  }

}
