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
      <div className="row">

        {
          campuses.map(campus => {
            return (
              <div className="col-sm-6" key={ campus.id }>
                <div className="card text-center">
                  <img className="card-img-top img-circle" src={ campus.image } alt="Card image cap"></img>
                  <div className="card-block">
                    <h4 className="card-title">{ campus.name }</h4>
                    <p className="card-text"><strong>{ students.filter(student => student.campusId === campus.id).length }</strong> Students</p>
                    <div className="card-footer text-center">
                      <NavLink to="/new-campus" className="btn btn-sm btn-outline-warning">Edit Campus</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        }

        <div className="card-footer text-center">
          <NavLink to="/new-campus" className="btn btn-sm btn-outline-primary">Add Campus</NavLink>
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
