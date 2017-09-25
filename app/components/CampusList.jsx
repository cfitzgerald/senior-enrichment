import React, { Component } from 'react'; // component currently unused
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import store from '../store';

function CampusList (props) {

  const { campuses, students } = props;

  return (
    <div className="col-sm-6">
      <br />
      <div className="card">
        <div className="card-header">Current Campuses</div>

        <div className="card-block">

          <ul className="list-group">
            {
              campuses.map(campus => {
                return (
                  <li key={ campus.id } className="list-group-item">
                    <NavLink to={ `/campuses/${ campus.id }` } activeClassName="active">
                      <span>{ campus.name } </span>
                      <span className="badge">{ students.filter(student => student.campusId === campus.id).length } Students</span>
                    </NavLink>
                  </li>
                );
              })
            }

            <div className="card-footer text-center">
              <NavLink to="/new-campus" className="btn btn-primary">Add Campus</NavLink>
            </div>
          </ul>

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

const CampusListContainer = connect(mapStateToProps)(CampusList);
export default withRouter(CampusListContainer);
// export default CampusListContainer;
