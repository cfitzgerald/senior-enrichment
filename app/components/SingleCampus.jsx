import React, { Component } from 'react'; // component currently unused
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import store from '../store';

function SingleCampus (props) {

  const { campuses, students } = props;

  return (
    <div className="col-sm-6">
      <br />
      <div className="card">
        <div className="card-header">Current Campuses</div>

        <div className="card-block">

          <h4 className="card-title">{ campus.name }</h4>

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

const SingleCampusContainer = connect(mapStateToProps)(SingleCampus);
export default withRouter(SingleCampusContainer);
// export default CampusListContainer;
