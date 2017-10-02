import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store, { updateStudent } from '../store';

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
    student.campus = campus;
    student.campusId = campus.id;
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
                  <th />
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
