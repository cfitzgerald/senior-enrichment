import React, { Component } from 'react';
// import { Redirect } from 'react-router';
import store, { addCampus, createCampus } from '../store';

export default class NewCampusForm extends Component {

  constructor() {
    super();
    this.state = store.getState();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleChange(e) {
    const change = {};
    change[e.target.name] = e.target.value;
    store.dispatch(addCampus(change));
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    store.dispatch(createCampus({ name }));
  }

  render() {

    const { handleChange, handleSubmit } = this;
    const { name } = this.state;

    return (
      <div className="col-sm-12">
        <br />
        <div className="card">
          <h3 className="card-header text-center">New Campus Entry Form</h3>

          <div className="card-block">

            <form onSubmit={ handleSubmit }>

              {/*
                error && <div className='alert alert-danger'>{ error.toString() }</div>
              */}

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  className="form-control"
                  onChange={ handleChange }
                  name="name"
                  placeholder="..."
                  type="text"
                  value={ name }
                />
              </div>

              <div className="card-footer text-center">
                <button className="btn btn-primary" type="submit">Save Campus</button>
              </div>

            </form>

          </div>

        </div>
      </div>
    );

  }
}
