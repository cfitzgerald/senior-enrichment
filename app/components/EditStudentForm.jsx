import React, { Component } from 'react';
// import { Redirect } from 'react-router';
import store, { updateStudent } from '../store';

export default class EditStudentForm extends Component {

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
    store.dispatch(updateStudent(change));
  }

  handleSubmit(e) {
    e.preventDefault();
    const existingStudent = {
      name: e.target.name.value,
      email: e.target.email.value,
      campusId: e.target.campusId.value,
    };
    store.dispatch(updateStudent(existingStudent));
  }

  render() {

    const { handleChange, handleSubmit } = this;
    const { name, email, campusId, campuses, students } = this.state;
    const studentId = Number(this.props.match.params.studentId);

    const student = students.filter(s => {
      return s.id === studentId;
    })[0];

    return (

      <div className="col-sm-12">
        <br />
        <div className="card">
          <h3 className="card-header text-center">Existing Student Edit Form</h3>

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
                  placeholder={ student && student.name || '...' }
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
                  placeholder={ student && student.email || '...' }
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
                  value={ student && student.campus.id || '...' }
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
