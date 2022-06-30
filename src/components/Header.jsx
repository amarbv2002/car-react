import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { FaHome, FaBolt, FaCar } from "react-icons/fa";
import Dealers from "./Dealers";
import Owners from "./Owners";

function Header() {
  const location = useLocation();

  function dynamicLogo() {
    if (location.pathname === "/") {
      return (
        <Link to="/" className="fs-1 fw-bold text-white text-decoration-none">
          Car Owners
        </Link>
      );
    }

    if (location.pathname === "/dealers") {
      return (
        <Link
          to="/dealers"
          className="fs-1 fw-bold text-white text-decoration-none"
        >
          Car Dealers
        </Link>
      );
    }
  }

  function dynamicBtn() {
    if (location.pathname === "/") {
      return (
        <Link
          to="/dealers"
          className="btn btn-primary ms-0 ms-lg-4 fs-5 mt-3 mt-lg-0"
        >
          <FaCar /> For Dealers
        </Link>
      );
    }

    if (location.pathname === "/dealers") {
      return (
        <Link to="/" className="btn btn-primary ms-0 ms-lg-4 fs-5 mt-3 mt-lg-0">
          <FaCar /> For Owners
        </Link>
      );
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black py-4 shadow-lg">
        <div className="container">
          <div className="logo">{dynamicLogo()}</div>

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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="btn btn-primary ms-0 ms-lg-4 fs-5 mt-3 mt-lg-0"
                >
                  <FaHome /> Home
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="btn btn-primary ms-0 ms-lg-4 fs-5 mt-3 mt-lg-0"
                  aria-current="page"
                  href="#best-practice"
                >
                  <FaBolt /> Best practice
                </a>
              </li>

              <li className="nav-item">{dynamicBtn()}</li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Owners />}></Route>
        <Route path="/dealers" element={<Dealers />}></Route>
      </Routes>
    </>
  );
}

export default Header;
