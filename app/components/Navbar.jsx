import React from 'react';
import { NavLink } from 'react-router-dom';
// import { withRouter } from 'react-router';
import store from '../store';

export default function Navbar () {

  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">

      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

          <li className="nav-item">
            <NavLink className="nav-link" to="/campuses" activeClassName="active">Campuses</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/students" activeClassName="active">Students</NavLink>
          </li>

        </ul>

        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>

      </div>
    </nav>
  );
}
