import React from "react";
import { FaAndroid, FaApple } from "react-icons/fa";

export default function Owners() {
  return (
    <>
      <section className="slider bg-dark" id="slider">
        <div className="container">
          <div className="content d-flex align-items-center justify-content-center">
            <div className="inner-content">
              <center>
                <h1 className="text-white">
                  Why use our <span className="text-primary">Car owners</span>{" "}
                  app?
                </h1>
                <p className="text-white w-75">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae sed nemo, enim harum sequi adipisci eligendi,
                  debitis corrupti inventore placeat consequatur et! Earum omnis
                  ad voluptas quidem numquam qui ut, ipsa quibusdam ipsam eum
                  autem, illo natus exercitationem aut. Praesentium, cupiditate
                  eos iure at rem consequatur molestiae impedit eius aut?
                </p>
                <a href="#" className="btn btn-primary btn-lg">
                  {" "}
                  <FaAndroid /> Download our Android App
                </a>
                <a
                  href="#"
                  className="btn btn-primary btn-lg ms-0 ms-md-3 mt-3 mt-md-0"
                >
                  <FaApple />
                  Download our iOS App
                </a>
              </center>
            </div>
          </div>
        </div>
      </section>

      <section className="best-practice" id="best-practice">
        <div className="container">
          <div className="row my-5">
            <div className="col-lg-5">
              <img src="../assets/img/car.svg" alt="" />
            </div>

            <div className="col-lg-7 mt-5">
              <h1 className="text-center text-lg-end">
                <span className="text-primary">Best practices</span> for using
                our app
              </h1>
              <ul className="list-group text-center text-lg-end border-0 fs-5 my-4">
                <li className="list-group-item border-0">
                  Use implicit intents and non-exported content providers.
                </li>
                <li className="list-group-item border-0">
                  Ask for credentials before showing sensitive information.
                </li>
                <li className="list-group-item border-0">
                  Apply network security measures.
                </li>
                <li className="list-group-item border-0">
                  Use WebView objects carefully.
                </li>
                <li className="list-group-item border-0">
                  Use intents to defer permissions.
                </li>
              </ul>
              <div className="text-center text-lg-end">
                <a href="#" className="btn btn-primary btn-lg">
                  <FaAndroid /> Download our Android App
                </a>
                <a
                  href="#"
                  className="btn btn-primary btn-lg ms-0 ms-md-3 mt-3 mt-md-0 mt-lg-3 mt-xl-0"
                >
                  <FaApple />
                  Download our iOS App
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
