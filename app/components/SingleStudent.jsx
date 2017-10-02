import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import store, { destroyStudent } from '../store';

export default class SingleStudent extends Component {

  constructor() {
    super();
    this.state = store.getState();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleClick(e, studentId) {
    e.preventDefault();
    store.dispatch(destroyStudent(studentId));
    // redirect?
  }

  render() {

    const { students } = this.state;
    const { handleClick } = this;
    const studentId = Number(this.props.match.params.studentId);

    const student = students.filter(s => {
      return s.id === studentId;
    })[0];

    return (

      <div className="row">

        <div className="col-sm-12">
          <br />
          <div className="card">
            <h3 className="card-header text-center">{ student.name }</h3>
            <div className="card-block">

              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Campus</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{ student.id }</th>
                    <td>{ student.name }</td>
                    <td>{ student.email }</td>
                    <td>{ student.campus.name }</td>
                    <td>
                      <Link
                        className="btn btn-sm btn-outline-warning space-right"
                        to={ `/students/${ student.id }/edit` }>Edit</Link>

                      <button
                        className="btn btn-sm btn-danger"
                        onClick={ (e) => handleClick(e, student.id) }>Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>

      </div>

    );
  }
}
