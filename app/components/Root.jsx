import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import store, { fetchCampuses, fetchStudents } from '../store';

import CampusForm from './CampusForm';
import CampusList from './CampusList';
import Navbar from './Navbar';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import StudentForm from './StudentForm';
import StudentList from './StudentList';
import Summary from './Summary';

export default class Root extends Component {

  render() {
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
            <Route path="/campuses/:campusId/view" component={ SingleCampus } />
            <Route path="/students/:studentId/view" component={ SingleStudent } />
            <Route path="/students/:studentId/edit" component={ StudentForm } />
            <Route exact path="/" component={ Summary } />
          </Switch>
        </div>

      </div>
    );
  }
}
