import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import store, { fetchCampuses, fetchStudents } from '../store';

import CampusForm from './CampusForm';
import CampusList from './CampusList';
import SingleCampus from './SingleCampus';
import Navbar from './Navbar';
import StudentForm from './StudentForm';
import StudentList from './StudentList';

export default class Root extends Component {

  // constructor() {
  //   super();
  //   this.state = store.getState();
  // }

  // componentDidMount() {
  //   const campusesThunk = fetchCampuses();
  //   const studentsThunk = fetchStudents();
  //   store.dispatch(campusesThunk);
  //   store.dispatch(studentsThunk);

  //   this.unsubscribe = store.subscribe(() => {
  //     this.setState(store.getState());
  //   });
  // }

  // componentWillUnmount () {
  //   this.unsubscribe();
  // }

  render() {

    // const { campuses, students } = this.state;

    return (
      <div className="container">

        <div className="page-header">
          <h1><small>Margaret Hamilton</small> Interplanetary Academy of JavaScript</h1>
          <Navbar />
        </div>

        <div className="row">
          <Switch>
            <Route exact path="/campuses" component={ CampusList } />
            <Route exact path="/students" component={ StudentList } />
            <Route exact path="/new-campus" component={ CampusForm } />
            <Route exact path="/new-student" component={ StudentForm } />
            <Route exact path="/campuses/:campusId/view" component={ SingleCampus } />
            <Route exact path="/students/:studentId" component={ StudentForm } />
            <Redirect to="/campuses" />
          </Switch>
        </div>

      </div>
    );
  }
}
