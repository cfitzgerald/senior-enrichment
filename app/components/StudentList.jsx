import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import store from '../store';

function StudentList (props) {

  const { campuses, students } = props;

  return (
    <div className="col-sm-6">
      <div className="panel panel-default">
        <div className="panel-heading">Students</div>

        <div className="panel-body">

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
            <hr />
            <li className="list-group-item">
              <NavLink to="/new-student">Add a student...</NavLink>
            </li>
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
// export default withRouter(StudentListContainer);
export default StudentListContainer;
