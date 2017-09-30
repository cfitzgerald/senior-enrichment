import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar () {

  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">

      <button className="navbar-toggler navbar-toggler-right"
        type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/campuses"
              activeClassName="active">Campuses</NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/students"
              activeClassName="active">Students</NavLink>
          </li>

        </ul>

        <form className="form-inline">
          <Link
            className="btn btn-md btn-outline-info space-right"
            to="/new-campus">Add Campus</Link>
          <Link
            className="btn btn-md btn-outline-info"
            to="/new-student">Add Student</Link>
        </form>

      </div>
    </nav>
  );
}
