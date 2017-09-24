// import { combineReducers } from 'redux';
// // import createLogger from 'redux-logger';
// // import thunkMiddleware from 'redux-thunk';

// // REDUCER IMPORT(s)

// import campuses from './campuses';
// import students from './students';

// const initialState = {};

// // REDUCER(s)

// const reducer = combineReducers({
//   campuses,
//   students,
// });

// const rootReducer = function(state = initialState, action) {
//   switch (action.type) {
//     default: return state;
//   }
// };

// export default rootReducer;

//////////////////////////////
// 2.
import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

// REDUCER IMPORT(s)
import campuses from './campuses';
import students from './students';

const reducer = combineReducers({
  campuses,
  students,
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
