import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { writeChannelName, postChannel } from '../store';

function AddStudent (props) {

  const { newChannelEntry, handleSubmit, handleChange } = props;

  return (
    <form onSubmit={ handleSubmit }>
      <div className="form-group">
        <label htmlFor="name">Add a Student</label>
        <input
          value={ newChannelEntry }
          onChange={ handleChange }
          className="form-control"
          type="text"
          name="studentName"
          placeholder="Enter the name of the new Student..."
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Add Student</button>
      </div>
    </form>
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
      const name = evt.target.studentName.value;
      // dispatch(postChannel({ name }, ownProps.history));
      dispatch(writeChannelName(''));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);
