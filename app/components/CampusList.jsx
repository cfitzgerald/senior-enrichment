import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store, { fetchCampuses, fetchStudents, destroyCampus } from '../store';

export default class CampusList extends Component {

  constructor() {
    super();
    this.state = store.getState();
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(e, campusId) {
    e.preventDefault();
    store.dispatch(destroyCampus(campusId));
  }

  render() {

    const { campuses, students } = this.state;
    const { handleClick } = this;

    return (

      <div className="row">

        <div className="col-sm-12">
          <br />
          <div className="row">
          {
            campuses && campuses.map(campus => {
              return (
                <div key={ campus.id } className="col-sm-6">
                  <div className="card text-center">
                    <img className="card-img-top img-circle" src={ campus.image } alt="Card image cap"></img>
                    <div className="card-block">
                      <h4 className="card-title">{ campus.name }</h4>
                      <p className="card-text"><strong>{ students.filter(student => student.campusId === campus.id).length }</strong> Students</p>
                      <div className="card-footer text-center">
                        <Link
                          className="btn btn-sm btn-outline-success space-right"
                          to={ `/campuses/${ campus.id }/view` }>View</Link>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={ (e) => handleClick(e, campus.id) }>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          }
          </div>
        </div>

      </div>

    );
  }
}
