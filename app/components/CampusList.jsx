import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import store from '../store';

function CampusList (props) {

  const { campuses, students } = props;

  return (
    <ul>
      {
        campuses.map(campus => {
          return (
            <li key={ campus.id }>
              <NavLink to={ `/campuses/${ campus.id }` } activeClassName="active">
                <span># { campus.name }</span>
                <span className="badge">{ students.filter(student => student.campusId === campus.id).length }</span>
              </NavLink>
            </li>
          );
        })
      }

      <li>
        <NavLink to="/new-campus">Create a campus...</NavLink>
      </li>
    </ul>
  );
}

/** Write your `connect` component below! **/
const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
    students: state.students
  };
};

const CampusListContainer = connect(mapStateToProps)(CampusList);
export default withRouter(CampusListContainer);
