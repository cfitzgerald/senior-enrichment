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
      <div className="card">
        <h3 className="card-header text-center">Current Campuses</h3>

        <div className="card-block">

          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Modify</th>
              </tr>
            </thead>
            <tbody>
            {
              campuses.map(campus => {
                return (
                  <tr key={ campus.id }>
                    <th scope="row">{ campus.id }</th>
                    <td>{ campus.name }</td>
                    <td>
                      <NavLink
                        to={ `/campuses/${ campus.id }` }
                        activeClassName="active"
                        className="btn btn-sm btn-danger">
                        Delete
                      </NavLink>
                    </td>
                  </tr>
                );
              })
            }
            </tbody>
          </table>

          <div className="card-footer text-center">
            <NavLink to="/new-campus" className="btn btn-primary">Add Campus</NavLink>
          </div>

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
