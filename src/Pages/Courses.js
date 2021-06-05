import React from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
const Courses = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex">
        <div id="black" className="sticky-top">
          <Link to="/">
            <h5 className="text-muted m-3" id="right">
              <span>
                <FaAngleLeft />
              </span>
              back
            </h5>
          </Link>
          <h5 className="text-light m-3" id="right">
            Logic
          </h5>
        </div>
        <div id="middle">
          <h5 className="m-3 mt-4">
            Joseph, Kevin, and Nicholas are 3 brothers, and the following
            statements about them are all true:
          </h5>
          <ul className="mt-5">
            <li className="h5">Joseph is not the youngest.</li>
            <li className="h5">Kevin is the oldest</li>
            <li className="h5">Nicholas is not the oldest.</li>
          </ul>
          <p className="m-4 h5">Drag the characters into the dotted boxes.</p>
          <div className="d-flex">
            <div id="dotted" className="text-center text-muted">
              Youngest
            </div>
            <div id="dotted"></div>
            <div id="dotted" className="text-center text-muted">
              Oldest
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-4">
              <h4>Joseph</h4>
              <img
                src="https://ds055uzetaobb.cloudfront.net/uploads/eREixHfFwc-p1.png"
                alt=""
                height="200px"
                width="150px"
              />
            </div>
            <div className="col-lg-4">
              <h4>Kevin</h4>
              <img
                src="https://ds055uzetaobb.cloudfront.net/uploads/zIwV9OLFiO-p2.png"
                alt=""
                height="200px"
                width="150px"
              />
            </div>
            <div className="col-lg-4">
              <h4>Nicolas</h4>
              <img
                src="https://ds055uzetaobb.cloudfront.net/uploads/A8r8kNZ762-p3.png"
                alt=""
                height="200px"
                width="150px"
              />
            </div>
          </div>
          <div className="d-flex">
            <button className="btn-hero btn-lg m-3">Show Explanation</button>
            <button className="btn-dark btn-lg m-3"> check Answer</button>
          </div>
        </div>
        <div id="last" className="text-center">
          <div className=" dropdown dropdown-bottom">
            <div
              className=" dropdown-toggle mt-3"
              role="button"
              data-bs-toggle="dropdown"
            >
              Lesson 1
            </div>
            <ul className="dropdown-menu ">
              <li>
                <a className="dropdown-item" href="#">
                  Lesson 2
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Lesson 3
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Lesson 4
                </a>
              </li>
            </ul>
          </div>
          <h3 className="m-3">Warmup puzzles</h3>
          <button className="btn-dark btn-lg">Continue</button>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Courses;
