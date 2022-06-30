import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  function dynamicLogo() {
    if (location.pathname === "/") {
      return "Owners";
    }

    if (location.pathname === "/dealers") {
      return "Dealers";
    }
  }

  function dynamicBtn() {
    if (location.pathname === "/") {
      return (
        <Link to="/dealers" className="nav-link px-2 text-white">
          For Dealers
        </Link>
      );
    }

    if (location.pathname === "/dealers") {
      return (
        <Link to="/" className="nav-link px-2 text-white">
          For Owners
        </Link>
      );
    }
  }

  return (
    <>
      <div className="container-fluid bg-black">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 container">
          <p className="col-md-4 mb-0 text-white">
            &copy; 2022 Car {dynamicLogo()}, Inc
          </p>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-white">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a href="#best-practice" className="nav-link px-2 text-white">
                Best practices
              </a>
            </li>
            <li className="nav-item">{dynamicBtn()}</li>
          </ul>
        </footer>
      </div>

      <Routes>
        <Route path="/"></Route>
        <Route path="/dealers"></Route>
      </Routes>
    </>
  );
}
