import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store, { fetchStudents, updateStudent } from '../store';

export default class StudentTransfer extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleTransfer = this.handleTransfer.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleTransfer(e, student, campus) {
    e.preventDefault();
    console.log('handleTransfer: campus = ', campus);
    console.log('handleTransfer: student BEFORE = ', student);
    student.campus = campus;
    student.campus.id = campus.id;
    console.log('handleTransfer: student AFTER = ', student);
    store.dispatch(updateStudent(student));
  }

  render() {

    const { students, campus } = this.props;
    const { handleTransfer } = this;

    return (

      <div className="col-sm-5">
        <br />
        <div className="card">
          <h3 className="card-header text-center">Students Available for Transfer</h3>
          <div className="card-block">

            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              {
                students && students.map(student => {
                  return (
                    <tr key={ student.id }>
                      <td>{ student.name }</td>
                      <td>
                        <Link
                          className="btn btn-sm btn-outline-success space-right"
                          to={ `/students/${ student.id }/view` }>View</Link>
                        <button
                          className="btn btn-sm btn-primary"
                          onClick={ (e) => handleTransfer(e, student, campus) }>Add</button>
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
