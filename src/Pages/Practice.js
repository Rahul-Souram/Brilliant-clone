import React from "react";
import data from "../data";
import Card from "../comp/Card";
const Practice = () => {
  return (
    <>
      <div id="bg">
        <div className="container d-flex">
          <div>
            <h1 className="m-2" id="logic">
              Logic
            </h1>
            <h3>
              Stretch your analytic muscles with knights, knaves, logic gates,
              and more!
            </h3>
            <h5 className="text-muted p1 ">
              The beginning of our introductory math journey is Logic. Through
              these challenging problem solving exercises, you'll construct the
              critical thinking skills that are the basis for mathematical
              reasoning.
            </h5>
            <h5 className="text-muted p1">
              You'll use limited information to make predictions – eliminating
              the impossible to uncover the truth. This course builds up to some
              truly mind-bending challenges!
              <a href="#" className="text-muted">
                Read more
              </a>
            </h5>
            <a href="#" className="text-muted">
              View prerequisites and next steps
            </a>
          </div>
          <div id="box">
            <div className="p-2 mt-5 text-center">
              <img
                src="
                https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png?width=254"
                alt=""
              />
              <div className="flex m-3">
                <span>
                  <h2 className="h2 m-1">37</h2>
                  <p>Interactive quizes</p>
                </span>
                <span>
                  <h2 className="h2 m-1">265+</h2>
                  <p>Concepts & Exercices</p>
                </span>
              </div>
              <button className="btn-dark btn-lg">Continue Course</button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <h1 className=" p-3">1) Intoduction </h1>
        <div className="row d-flex">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {data.map((items) => {
                const { id, title, img, text } = items;
                return <Card key={id} {...items} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <div className="container">
        <h1 className=" p-3">2) Rational detective </h1>
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {data.map((items) => {
                const { id, title, img, text } = items;
                return <Card key={id} {...items} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Practice;
