import React, { Component } from 'react'; // component currently unused
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import store from '../store';

function StudentList (props) {

  const { campuses, students } = props; // campuses currently unused

  return (
    <div className="col-sm-12">
      <br />
      <div className="card">
        <h3 className="card-header text-center">Current Students</h3>

        <div className="card-block">

          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Campus</th>
                <th>Modify</th>
              </tr>
            </thead>
            <tbody>
            {
              students.map(student => {
                return (
                  <tr key={ student.id }>
                    <th scope="row">{ student.id }</th>
                    <td>{ student.name }</td>
                    <td>{ student.email }</td>
                    <td>{ student.campusId }</td>
                    <td>
                        <NavLink
                          activeClassName="active"
                          className="btn btn-sm btn-warning"
                          to={ `/students/${ student.id }` }
                        >
                          Edit
                        </NavLink>

                        <NavLink
                          activeClassName="active"
                          className="btn btn-sm btn-danger"
                          to={ `/students/${ student.id }` }
                        >
                          Delete
                        </NavLink>
                    </td>
                  </tr>
                );
              })
            }
            </tbody>
          </table>

          <div className="card-footer text-center">
            <NavLink to="/new-student" className="btn btn-primary">Add Student</NavLink>
          </div>

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
