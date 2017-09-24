import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CampusList from './CampusList';
import StudentList from './StudentList';
import store from '../store';

export default class Root extends Component {

  // componentDidMount () {
  //   const messagesThunk = fetchMessages();
  //   const channelsThunk = fetchChannels();
  //   store.dispatch(messagesThunk);
  //   store.dispatch(channelsThunk);
  // }

  render () {
    return (
      <div className="container">
        <div className="page-header">
          <h1><small>Margaret Hamilton</small> Interplanetary Academy of JavaScript</h1>
        </div>
        <div className="row">
          <CampusList />
          <StudentList />
        </div>
      </div>
    );
  }
}
