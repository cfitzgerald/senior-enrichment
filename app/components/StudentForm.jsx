import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStudent, createStudent } from '../store';

function StudentForm (props) {

  const { nameInput, emailInput, campusId, campuses, handleSubmit, handleChange } = props;

  return (
    <div className="col-sm-12">
      <br />
      <div className="card">
        <h3 className="card-header text-center">New Student Entry Form</h3>

        <div className="card-block">

          <form onSubmit={ handleSubmit }>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                onChange={ handleChange }
                name="studentName"
                placeholder="Enter the NAME of the new Student..."
                type="text"
                value={ nameInput }
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Email</label>
              <input
                className="form-control"
                name="studentEmail"
                onChange={ handleChange }
                placeholder="Enter the EMAIL of the new Student..."
                type="text"
                value={ emailInput }
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

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
    students: state.students
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleChange (e) {
      dispatch(addStudent(e.target.value));
    },
    handleSubmit (e) {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const campusId = e.target.campusId.value;
      dispatch(createStudent({ name }, ownProps.history ));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);
