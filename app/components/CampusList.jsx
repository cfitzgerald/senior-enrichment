import React, { Component } from 'react'; // component currently unused
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import store from '../store';

function CampusList (props) {

  const { campuses, students } = props;

  return (
    <div className="col-sm-12">
      <br />

        {
          campuses.map(campus => {
            return (
              <div className="card" key={ campus.id }>
                <img className="card-img-top img-circle" src="/images/graumans-center.png" alt="Card image cap"></img>
                <div className="card-block">
                  <h4 className="card-title">{ campus.name }</h4>
                  <div className="card-footer text-center">
                    <NavLink to="/new-campus" className="btn btn-sm btn-warning">Edit Campus</NavLink>
                  </div>
                </div>
              </div>
            );
          })
        }

        <div className="card-footer text-center">
          <NavLink to="/new-campus" className="btn btn-sm btn-primary">Add Campus</NavLink>
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
