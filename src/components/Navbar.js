import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">
                  {props.about}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact">
                  {props.contact}
                </Link>
              </li>
            </ul>
          </div>
          <div
            className={`form-check text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="blue"
                onClick={props.setB}
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Blue
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="red"
                onClick={props.setR}
              />
              <label className="form-check-label" htmlFor="exampleRadios2">
                Red
              </label>
            </div>
          </div>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggle}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Darkmode
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  contact: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Title",
  about: "About us",
  contact: "Contact us",
};

export default Navbar;
