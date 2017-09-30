import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import store from '../store';

export default class SingleCampus extends Component {

  constructor() {
    super();
    this.state = store.getState();
    // this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  // handleClick(e, studentId) {
  //   e.preventDefault();
  //   store.dispatch(destroyStudent(studentId));
  // }

  render() {

    const { campuses, students } = this.state;
    const campusId = Number(this.props.match.params.campusId);

    const campus = campuses.filter(campus => {
      return campus.id === campusId;
    })[0];

    const campusStudents = students.filter(student => {
      return student.campusId === campusId;
    });

    return (
      <div className="col-sm-12">
        <br />
        <div className="card">
          <h3 className="card-header text-center">{ campus.name }</h3>
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
                campusStudents && campusStudents.map(student => {
                  return (
                    <tr key={ student.id }>
                      <th scope="row">{ student.id }</th>
                      <td>{ student.name }</td>
                      <td>{ student.email }</td>
                      <td>{ student.campus.name }</td>
                      <td>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={ (e) => handleRemove(e, student.id) }>Delete</button>
                      </td>
                    </tr>
                  );
                })
              }
              </tbody>
            </table>

          </div>
        </div>
      </div>
    );
  }

}
