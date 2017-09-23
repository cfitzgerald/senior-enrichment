import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import CampusList from './CampusList';
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
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}
