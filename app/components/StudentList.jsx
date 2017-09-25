import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import store from '../store';

function StudentList (props) {

  const { campuses, students } = props;

  return (
    <div className="col-sm-6">
      <br />
      <div className="card">
        <div className="card-header">Current Students</div>

        <div className="card-block">

          <ul className="list-group">
            {
              students.map(student => {
                return (
                  <li key={ student.id } className="list-group-item">
                    <NavLink to={ `/students/${ student.id }` } activeClassName="active">
                      <span>{ student.name }</span>
                    </NavLink>
                  </li>
                );
              })
            }

            <div className="card-footer text-center">
              <NavLink to="/new-student" className="btn btn-primary">Add Student</NavLink>
            </div>
          </ul>

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

const StudentListContainer = connect(mapStateToProps)(StudentList);
export default withRouter(StudentListContainer);
// export default StudentListContainer;
