import React from "react";
import Privacy from "./Privacy";
import "./Footer.css";
// import Logo from "../sageLogo.ico";

function Footercomponent() {
  // constructor() {
  //   super();
  //   this.state = {
  //     show: false
  //   };
  //   this.showModal = this.showModal.bind(this);
  //   this.hideModal = this.hideModal.bind(this);
  // }

  // showModal = () => {
  //   this.setState({ show: true });
  // };

  // hideModal = () => {
  //   this.setState({ show: false });
  // };

  // render() {
  return (
    <div>
      <footer>
        <div class="footer-wrap">
          <div class="container first_class">
            <div class="row">
              <div class="col-md-4 col-sm-6">
                <h3>BE THE FIRST TO KNOW</h3>
                <p>
                  Get all the latest information on Triedge Services, Events,
                  Jobs and Fairs. Sign up for our newsletter today.
                </p>
              </div>
              <div class="col-md-4 col-sm-6">
                <form class="newsletter">
                  <input type="text" placeholder="Email Address" />
                  <button class="newsletter_submit_btn" type="submit">
                    <i class="fa fa-paper-plane"></i>
                  </button>
                </form>
              </div>
              <div class="col-md-4 col-sm-6">
                <div class="col-md-12">
                  <div class="standard_social_links">
                    <div>
                      <li class="round-btn btn-facebook">
                        <a href="#">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li class="round-btn btn-linkedin">
                        <a href="#">
                          <i class="fab fa-linkedin-in" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li class="round-btn btn-twitter">
                        <a href="#">
                          <i class="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li class="round-btn btn-instagram">
                        <a href="#">
                          <i class="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li class="round-btn btn-whatsapp">
                        <a href="#">
                          <i class="fab fa-whatsapp" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li class="round-btn btn-envelop">
                        <a href="#">
                          <i class="fa fa-envelope" aria-hidden="true"></i>
                        </a>
                      </li>
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>
                <div class="col-md-12">
                  <h3 style={{ textAlign: `right` }}>Stay Connected</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="second_class">
            <div class="container second_class_bdr">
              <div class="row">
                <div class="col-md-4 col-sm-6">
                  <div class="footer-logo">
                    {/* <img src={Logo} alt="logo" /> */}
                  </div>
                  <p>
                    Your one-stop career platform to find Jobs, Internships,
                    Professional Trainings, Projects, and Volunteering
                    Opportunities.
                  </p>
                </div>
                <div class="col-md-2 col-sm-6">
                  <h3>Quick LInks</h3>
                  <ul class="footer-links">
                    <li>
                      <a href="index">Home</a>
                    </li>
                    <li>
                      <a href="about">About us</a>
                    </li>
                    {/* <li><a href="#">Triedge Partners</a>
            </li> */}
                    <li>
                      <a href="index#contact">Contact Us</a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        Terms &amp; Conditions
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        Privacy Policy
                      </a>

                      {/* Modal  */}
                      <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">
                                Privacy Policy
                              </h5>

                              <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times; </span>
                              </button>
                            </div>
                            <div class="modal-body">
                              <p style={{ color: `black` }}>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                              </p>
                            </div>
                            <div class="modal-footer">
                              <button type="button" data-dismiss="modal">
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="learn">E-Learning</a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-3 col-sm-6">
                  <h3>More</h3>
                  <ul class="footer-category">
                    <li>
                      <a href="#">Fresher Jobs</a>
                    </li>
                    <li>
                      <a href="#">Internships &amp; Projects </a>
                    </li>
                    <li>
                      <a href="#"> Resume Writing Services</a>
                    </li>
                    <li>
                      <a href="#">Library</a>
                    </li>
                    <li>
                      <a href="#">Sage Ambassadors</a>
                    </li>
                  </ul>
                  <div class="clearfix"></div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <h3>Staff Work Time</h3>
                  <ul style={{ color: `white` }}>
                    <li>
                      <details>
                        <summary>Monday- Friday</summary>
                        2:00 AM - 12:00 PM
                      </details>
                    </li>

                    <li>
                      <details>
                        <summary>Weekend</summary>
                        2:00 AM - 12:00 PM
                      </details>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="container-fluid">
              <div class="copyright">
                {" "}
                Copyright 2023 | All Rights Reserved by Zerihun&Neba
              </div>
            </div>
          </div>
        </div>  
            <a
        href="#top"
        class="back-top-btn"
        aria-label="Back to top"
        data-back-top-btn
      >
        <ion-icon name="arrow-up"></ion-icon>
      </a>
      </footer>


    </div>
  );
}
// }

export default Footercomponent;
