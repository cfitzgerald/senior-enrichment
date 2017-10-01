import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import CampusList from './CampusList';
import EditStudentForm from './EditStudentForm';
import Navbar from './Navbar';
import NewCampusForm from './NewCampusForm';
import NewStudentForm from './NewStudentForm';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
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

        <Switch>
          <Route exact path="/campuses" component={ CampusList } />
          <Route exact path="/students" component={ StudentList } />
          <Route exact path="/new-campus" component={ NewCampusForm } />
          <Route exact path="/new-student" component={ NewStudentForm } />
          <Route path="/campuses/:campusId/view" component={ SingleCampus } />
          <Route path="/students/:studentId/view" component={ SingleStudent } />
          <Route path="/students/:studentId/edit" component={ EditStudentForm } />
          <Route exact path="/" component={ Summary } />
        </Switch>

      </div>

    );
  }
}
