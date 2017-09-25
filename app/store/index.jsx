import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// REDUCER IMPORT(s)
import campuses from './campuses';
import students from './students';
import addCampus from './addCampus';
import addStudent from './addStudent';

const reducer = combineReducers({
  campuses,
  students,
  addCampus,
  addStudent,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    createLogger()
  ))
);

export default store;

// export action creators
export * from './campuses';
export * from './students';
export * from './addCampus';
export * from './addStudent';
