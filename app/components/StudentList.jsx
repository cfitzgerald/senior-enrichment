import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import store from '../store';

function StudentList (props) {

  const { campuses, students } = props;

  return (
    <div className="col-sm-6">
      <ul>
        {
          students.map(student => {
            return (
              <li key={ student.id }>
                <NavLink to={ `/students/${ student.id }` } activeClassName="active">
                  <span>{ student.name }</span>
                  <span>{ student.email }</span>
                </NavLink>
              </li>
            );
          })
        }

        <li>
          <NavLink to="/new-student">Add a student...</NavLink>
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
    students: state.students
  };
};

const StudentListContainer = connect(mapStateToProps)(StudentList);
// export default withRouter(StudentListContainer);
export default StudentListContainer;
