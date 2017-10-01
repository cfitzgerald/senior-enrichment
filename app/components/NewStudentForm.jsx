import React, { Component } from 'react';
import { Redirect } from 'react-router';
import store, { addStudent, createStudent, updateStudent } from '../store';

export default class NewStudentForm extends Component {

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
    store.dispatch(addStudent(change));
  }

  handleSubmit(e) {
    e.preventDefault();
    const newStudent = {
      name: e.target.name.value,
      email: e.target.email.value,
      campusId: e.target.campusId.value,
    };
    store.dispatch(createStudent(newStudent));
  }

  render() {

    const { handleChange, handleSubmit } = this;
    const { name, email, campusId, campuses } = this.state;
    console.log('StudentForm: this.props = ', this.props);
    // Number(this.props.match.params.studentId)

    return (
      <div className="col-sm-12">
        <br />
        <div className="card">
          <h3 className="card-header text-center">New Student Entry Form</h3>

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

              <div className="form-group">
                <label htmlFor="name">Email</label>
                <input
                  className="form-control"
                  name="email"
                  onChange={ handleChange }
                  placeholder="..."
                  type="text"
                  value={ email }
                />
              </div>

              <div className="form-group">
                <label htmlFor="campus">Select Campus</label>
                <select
                  className="form-control"
                  name="campusId"
                  onChange={ handleChange }
                  value={ campusId }
                >
                  <option value="">-- none --</option>
                  {
                    campuses.map(campus => {
                      return (
                        <option key={ campus.id } value={ campus.id }>{ campus.name }</option>
                      );
                    })
                  }
                </select>
              </div>

              <div className="card-footer text-center">
                <button className="btn btn-primary" type="submit">Save Student</button>
              </div>

            </form>

          </div>

        </div>
      </div>
    );

  }
}
