import React, { Component } from 'react'; // component currently unused
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import store, { fetchCampuses, fetchStudents, destroyStudent } from '../store';

export default class StudentList extends Component {

  constructor() {
    super();
    this.state = store.getState();
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const campusesThunk = fetchCampuses();
    const studentsThunk = fetchStudents();
    store.dispatch(campusesThunk);
    store.dispatch(studentsThunk);

    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleClick(e, studentId) {
    store.dispatch(destroyStudent(studentId));
  }

  render() {

    const { campuses, students } = this.state;
    const { handleClick } = this;

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
                      <td>{ student.campus.name }</td>
                      <td>
                          <Link
                            className="btn btn-sm btn-warning"
                            id="student-edit"
                            to={ `/students/${ student.id }` }
                          >
                            Edit
                          </Link>

                          <button
                            className="btn btn-sm btn-danger"
                            onClick={(e) => handleClick(e, student.id) }
                          >
                            Delete
                          </button>
                      </td>
                    </tr>
                  );
                })
              }
              </tbody>
            </table>

            <div className="card-footer text-center">
              <Link to="/new-student" className="btn btn-primary">Add Student</Link>
            </div>

          </div>

        </div>
      </div>
    );
  }

}
