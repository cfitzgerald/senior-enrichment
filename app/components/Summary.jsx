import React, { Component } from 'react';
import store, { fetchCampuses, fetchStudents } from '../store';

export default class Summary extends Component {

  constructor() {
    super();
    this.state = store.getState();
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

  render() {

    const { campuses, students } = this.state;

    const noCampus = students.filter(student => {
      return !student.campus;
    });

    return (

      <div className="row">

        <div className="col-sm-12">
          <br />
          <div className="card">
            <h3 className="card-header text-center">Administrative Summary</h3>
            <div className="card-block">

              <ul className="list-group">

                <li className="list-group-item"><span>There are <strong>{ campuses.length }</strong> campuses.</span></li>

                <li className="list-group-item">Campuses:
                  <ul>
                  {
                    campuses.map(campus => {
                      return (
                        <li key={ campus.id }><strong>{ campus.name }</strong> has <strong>{ campus.students.length }</strong> students.</li>
                      );
                    })
                  }
                    <li>No campus for <strong>{ noCampus.length }</strong> student(s).</li>
                  </ul>
                </li>

                <li className="list-group-item"><span>There are <strong>{ students.length }</strong> students.</span></li>

              </ul>

            </div>
          </div>
        </div>

      </div>

    );
  }
}
