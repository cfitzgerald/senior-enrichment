import React, { Component } from 'react';
import StudentTransfer from './StudentTransfer';
import store, { updateStudent } from '../store';

export default class SingleCampus extends Component {

  constructor() {
    super();
    this.state = store.getState();
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleRemove(e, student) {
    e.preventDefault();
    student.campus = {};
    student.campusId = null;
    store.dispatch(updateStudent(student, this.state.students));
  }

  render() {

    const { campuses, students } = this.state;
    const { handleRemove } = this;
    const campusId = Number(this.props.match.params.campusId);

    console.log('SingleCampus: campuses = ', campuses);
    const campus = campuses.filter(c => {
      return c.id === campusId;
    })[0];

    const campusStudents = students.filter(s => {
      return s.campusId === campusId;
    });

    const nonCampusStudents = students.filter(s => {
      return s.campusId !== campusId;
    });

    return (

      <div className="row">

        <div className="col-sm-7">
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
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                {
                  campusStudents && campusStudents.map(student => {
                    return (
                      <tr key={ student.id }>
                        <td>{ student.id }</td>
                        <td>{ student.name }</td>
                        <td>{ student.email }</td>
                        <td>
                            <button
                              className="btn btn-sm btn-danger"
                              onClick={ (e) => handleRemove(e, student) }>Remove</button>
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

        <StudentTransfer students={ nonCampusStudents } campus={ campus } />

      </div>

    );
  }
}
