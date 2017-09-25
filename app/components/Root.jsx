import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CampusList from './CampusList';
import StudentList from './StudentList';
import Navbar from './Navbar';
import store, { fetchCampuses, fetchStudents } from '../store';

export default class Root extends Component {

  componentDidMount () {
    const campusesThunk = fetchCampuses();
    const studentsThunk = fetchStudents();
    store.dispatch(campusesThunk);
    store.dispatch(studentsThunk);
  }

  render () {
    return (
      <div className="container">

        <div className="page-header">
          <h1><small>Margaret Hamilton</small> Interplanetary Academy of JavaScript</h1>
        </div>

        <Navbar />

        <div className="row">
          <Switch>
            <Route exact path="/" />
            <Route exact path="/campuses" component={ CampusList } />
            <Route exact path="/students" component={ StudentList } />
          </Switch>
        </div>

      </div>
    );
  }
}
