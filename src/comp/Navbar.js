import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand text-dark" to="/">
            <img
              src="https://cdn.onesearch.com/ib/th?id=OIP.1YmpeTB_uAzfazxzAu8MtwHaHa&pid=Api&P=0&w=300&h=300"
              width="40px"
              height="40px"
              alt=""
            />
            <span className="display-6">BRILLIANT</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
          >
            <FaBars className="text-dark" />
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active" id="nav">
                <Link className="nav-link text-dark" to="/">
                  <h5>Practice Logic</h5>
                </Link>
              </li>
              <li className="nav-item" id="nav">
                <Link className="nav-link text-dark" to="/Courses">
                  <h5>Courses</h5>
                </Link>
              </li>
            </ul>
            <form className="d-flex ml-auto">
              <input
                id="input"
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                id="input"
                className="btn btn-outline-dark btn-pill"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
