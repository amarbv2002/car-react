import React from "react";
import { FaAndroid, FaApple } from "react-icons/fa";

export default function Dealers() {
  return (
    <>
      <section class="slider bg-dark" id="slider">
        <div class="container">
          <div class="content d-flex align-items-center justify-content-center">
            <div class="inner-content">
              <center>
                <h1 class="text-white">
                  Why use our <span class="text-primary">Car Dealers</span> app?
                </h1>
                <p class="text-white w-75">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae sed nemo, enim harum sequi adipisci eligendi,
                  debitis corrupti inventore placeat consequatur et! Earum omnis
                  ad voluptas quidem numquam qui ut, ipsa quibusdam ipsam eum
                  autem, illo natus exercitationem aut. Praesentium, cupiditate
                  eos iure at rem consequatur molestiae impedit eius aut?
                </p>
                <a href="#" class="btn btn-primary btn-lg">
                  <FaAndroid /> Download our Android App
                </a>
                <a
                  href="#"
                  class="btn btn-primary btn-lg ms-0 ms-md-3 mt-3 mt-md-0"
                >
                  <FaApple />
                  Download our iOS App
                </a>
              </center>
            </div>
          </div>
        </div>
      </section>

      <section class="best-practice" id="best-practice">
        <div class="container">
          <div class="row my-5">
            <div class="col-lg-7">
              <h1 class="text-center text-lg-start">
                <span class="text-primary">Best practices</span> for using our
                app
              </h1>
              <ul class="list-group text-center text-lg-start border-0 fs-5 my-4">
                <li class="list-group-item border-0">
                  Use implicit intents and non-exported content providers.
                </li>
                <li class="list-group-item border-0">
                  Ask for credentials before showing sensitive information.
                </li>
                <li class="list-group-item border-0">
                  Apply network security measures.
                </li>
                <li class="list-group-item border-0">
                  Use WebView objects carefully.
                </li>
                <li class="list-group-item border-0">
                  Use intents to defer permissions.
                </li>
              </ul>
              <div class="text-center text-lg-start">
                <a href="#" class="btn btn-primary btn-lg">
                  <FaAndroid /> Download our Android App
                </a>
                <a
                  href="#"
                  class="btn btn-primary btn-lg ms-0 ms-md-3 mt-3 mt-md-0 mt-lg-3 mt-xl-0"
                >
                  <FaApple />
                  Download our iOS App
                </a>
              </div>
            </div>

            <div class="col-lg-5">
              <img class="mt-0 mt-lg-4" src="./assets/img/car2.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
