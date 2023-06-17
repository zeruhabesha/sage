import React from "react";
import One from "./img/hero-banner1.png";
import Two from "./img/hero-abs-1.png";
import Three from "./img/hero-abs-2.png";
import Banner1 from "./img/cta-banner.jpg";
import Banner11 from "./img/cta-bg.png";
import About1 from "./img/about-icon-1.png";
import About2 from "./img/about-icon-2.png";
import About3 from "./img/about-icon-3.png";
import About11 from "./img/about-banner.jpg";
import About12 from "./img/about-abs-1.jpg";
import About13 from "./img/about-abs-2.jpg";
import Home from "./img/hero-bg.jpg";
import Event from "./img/event-1.jpg";
import Event1 from "./img/event-2.jpg";
import Event2 from "./img/event-3.jpg";
import Advert from "./Formimg/advert.png";
import "./Formimg/Faq.css";
import "./Comm.css";
import "../style.css";
import zedo from "./img/team1.jpg";
import neba from "./img/neba.jpg";
import lab from "./img/library.jpg";
import classRoom from "./img/classRoom.jpg";
import comp from "./img/computer-lab.jpg";
import faq from "./img/FAQ.png";
import Footercomponent from "./Footercomponent";
import Navcompnent from "./Navcompnent";
function Homecomponent() {
  return (
    <div>
      <Navcompnent/>
      <main>
        <article>
          <section
            className="hero"
            id="home"
            aria-label="hero"
            Style={{
              backgroundImage: "url(" + Home + ")",
            }}
          >
            <div className="container">
              <div className="hero-content">
                <img
                  src={Advert}
                  width="200"
                  height="100"
                  loading="lazy"
                  alt="hero image"
                  className="advert"
                />

                <p className="section-subtitle">
                  {" "}
                  Better Learning Future With Us
                </p>

                <h2 className="h2 hero-title">
                  Education Is About Academic Excellence
                </h2>

                <p className="hero-text">
                  Sage Education offers certificate 3 in aged care in Brisbane
                  to make you job-ready in the aged and disability care sector.
                </p>

                <a href="#" className="btn1 btn1-primary">
                  <span className="span">Get Started Today</span>

                  <ion-icon
                    name="arrow-forward-outline"
                    aria-hidden="true"
                  ></ion-icon>
                </a>
              </div>

              <figure className="hero-banner">
                <img
                  src={One}
                  width="500"
                  height="500"
                  loading="lazy"
                  alt="hero image"
                  className="w-100"
                />

                <img
                  src={Two}
                  width="318"
                  height="352"
                  loading="lazy"
                  aria-hidden="true"
                  className="abs-img abs-img-1"
                />

                <img
                  src={Three}
                  width="160"
                  height="160"
                  loading="lazy"
                  aria-hidden="true"
                  className="abs-img abs-img-2"
                />
              </figure>
            </div>
          </section>

          <section className="section category" aria-label="category">
            <div className="container">
              <p className="section-subtitle">Course Categories</p>

              <h2 className="h2 section-title">Popular Topics To Learn</h2>

              <ul className="grid-list">
                <li>
                  <div className="category-card">
                    <div className="card-icon">
                      <ion-icon name="briefcase-outline"></ion-icon>
                    </div>

                    <div>
                      <h3 className="h3 card-title">
                        <a href="#">Languages</a>
                      </h3>

                      <span className="card-meta">39 Course</span>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="category-card">
                    <div className="card-icon">
                      <ion-icon name="color-palette-outline"></ion-icon>
                    </div>

                    <div>
                      <h3 className="h3 card-title">
                        <a href="#">Graphics Design</a>
                      </h3>

                      <span className="card-meta">39 Course</span>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="category-card">
                    <div className="card-icon">
                      <ion-icon name="layers-outline"></ion-icon>
                    </div>

                    <div>
                      <h3 className="h3 card-title">
                        <a href="#">Business Management</a>
                      </h3>

                      <span className="card-meta">39 Course</span>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="category-card">
                    <div className="card-icon">
                      <ion-icon name="laptop-outline"></ion-icon>
                    </div>

                    <div>
                      <h3 className="h3 card-title">
                        <a href="#">Web Development</a>
                      </h3>

                      <span className="card-meta">39 Course</span>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="category-card">
                    <div className="card-icon">
                      <ion-icon name="headset-outline"></ion-icon>
                    </div>

                    <div>
                      <h3 className="h3 card-title">
                        <a href="#">Digital Marketing</a>
                      </h3>

                      <span className="card-meta">39 Course</span>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="category-card">
                    <div className="card-icon">
                      <ion-icon name="server-outline"></ion-icon>
                    </div>

                    <div>
                      <h3 className="h3 card-title">
                        <a href="#">Data Sciences</a>
                      </h3>

                      <span className="card-meta">39 Course</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="section about" id="about" aria-label="about">
            <div className="container">
              <figure className="about-banner">
                <img
                  src={About11}
                  width="450"
                  height="590"
                  loading="lazy"
                  alt="about banner"
                  className="w-100 about-img"
                />

                <img
                  src={About12}
                  width="188"
                  height="242"
                  loading="lazy"
                  aria-hidden="true"
                  className="abs-img abs-img-1"
                />

                <img
                  src={About13}
                  width="150"
                  height="200"
                  loading="lazy"
                  aria-hidden="true"
                  className="abs-img abs-img-2"
                />
              </figure>

              <div className="about-content">
                <p className="section-subtitle">Who We Are</p>

                <h2 className="h2 section-title">We Offer The Best Carrier</h2>

                <ul className="about-list">
                  <li className="about-item">
                    <div className="item-icon item-icon-1">
                      <img
                        src={About1}
                        width="30"
                        height="30"
                        loading="lazy"
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <h3 className="h3 item-title">
                        Industry Expert Instructor
                      </h3>

                      <p className="item-text">
                        As a leader in tertiary education, the Sage Institute
                        has an unrivaled reputation for the quality of its
                        teaching.
                      </p>
                    </div>
                  </li>

                  <li className="about-item">
                    <div className="item-icon item-icon-2">
                      <img
                        src={About2}
                        width="30"
                        height="30"
                        loading="lazy"
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <h3 className="h3 item-title">
                        Up-to-Date Course Content
                      </h3>

                      <p className="item-text">
                        As a leader in tertiary education, the Sage Institute
                        has an unrivaled reputation for the quality of its
                        teaching.
                      </p>
                    </div>
                  </li>

                  <li className="about-item">
                    <div className="item-icon item-icon-3">
                      <img
                        src={About3}
                        width="30"
                        height="30"
                        loading="lazy"
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <h3 className="h3 item-title">
                        Biggest Student Community
                      </h3>

                      <p className="item-text">
                        As a leader in tertiary education, the Sage Institute
                        has an unrivaled reputation for the quality of its
                        teaching.
                      </p>
                    </div>
                  </li>
                </ul>

                <a href="#" className="btn1 btn1-primary">
                  <span className="span">Know About Us</span>

                  <ion-icon
                    name="arrow-forward-outline"
                    aria-hidden="true"
                  ></ion-icon>
                </a>
              </div>
            </div>
          </section>

          {/* our facilities  */}
          <div class="container">
            <h1
              class="main-header display-5 text-center"
              style={{ color: `brown` }}
            >
              Our Facilities
            </h1>
            <div class="row">
              <div class="col-lg my-2 mx-3">
                <img src={lab} alt="library" class="card-img rounded" />
                <div class="card-text text-left mt-2">
                  <h4 class="display-5 sub-header my-2">Standard Library</h4>
                  <p class=" card-text body-text">
                    We provide our students with fully equiped library that
                    holds books, articles and pamphlets of various studies of
                    knowledge, and it's absolutely free and opened to all.
                  </p>
                </div>
              </div>
              <div class="col-lg my-2 mx-3">
                <img src={comp} alt="computer-lab" class="card-img rounded" />
                <div class="card-text text-left mt-2">
                  <h4 class="display-5 sub-header my-2">
                    Modern Computer Laboratory
                  </h4>
                  <p class=" card-text body-text">
                    Our IT lessons are always held at a computer laboratory to
                    train upcoming ers to be versatile in the fields of
                    technology. We intensively train students who have the
                    passion of becoming programmers in future.
                  </p>
                </div>
              </div>
              <div class="col-lg my-2 mx-3">
                <img
                  src={classRoom}
                  alt="science-lab"
                  class="card-img rounded"
                  style={{ height: `270px` }}
                />
                <div class="card-text text-left mt-2">
                  <h4 class="display-5 sub-header my-2">
                    Modern Lecture Class Room
                  </h4>
                  <p class=" card-text body-text">
                    With our Lecture Class Room, it is filled with all necessary
                    equipment and materials for teaching to be comfortable from
                    the basics. Students have their theoretical lessons at the
                    Lecture room for a clearer understanding.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <section
            className="section cta"
            aria-label="workshop"
            style={{ backgroundImage: "url(" + Banner11 + ")" }}
            //   style="background-image: url('../assets/images/cta-bg.png')"
          >
            <div className="container">
              <figure className="cta-banner">
                <img
                  src={Banner1}
                  width="580"
                  height="380"
                  loading="lazy"
                  alt="cta banner"
                  class="img-cover"
                />
              </figure>

              <div className="cta-content">
                <p className="section-subtitle">Upcomming Class</p>

                <h2 className="h2 section-title">Join Sage Community</h2>

                <p className="section-text">
                  The training is 100% supported by practice and has more than
                  15 projects in it, and on-the-job training is also
                  facilitated.
                </p>

                <a href="#" className="btn1 btn1-secondary">
                  <span className="span">Upcomming Classes</span>

                  <ion-icon
                    name="arrow-forward-outline"
                    aria-hidden="true"
                  ></ion-icon>
                </a>
              </div>
            </div>
          </section>

          {/* here */}
          <div class="container">
            <h2 className="head ">
              TESTIMONIAL <br />
              Our Successful Students
            </h2>
            <ul class="cards">
              <li class="card">
                <div>
                  <h3 class="card-title">
                    <img className="img" src={neba} />
                  </h3>
                </div>
                <div class="card-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </li>
              <li class="card">
                <div>
                  <h3 class="card-title">
                    <img className="img" src={zedo} />
                  </h3>
                </div>
                <div class="card-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    repudiandae magnam harum natus fuga et repellat in maiores.
                  </p>
                </div>
              </li>
              <li class="card">
                <div>
                  <h3 class="card-title">
                    <img className="img" src={neba} />
                  </h3>
                </div>
                <div class="card-content">
                  <p>
                    Phasellus ultrices lorem vel bibendum ultricies.Phasellus
                    ultrices lorem vel bibendum ultricies.
                  </p>
                </div>
              </li>
              <li class="card">
                <div>
                  <h3 class="card-title">
                    {" "}
                    <img className="img" src={zedo} />
                  </h3>
                </div>
                <div class="card-content">
                  <p>
                    Aenean posuere mauris quam, pellentesque auctor Aenean
                    posuere mauris quam, pellentesque auctor
                  </p>
                </div>
              </li>
              <li class="card">
                <div>
                  <h3 class="card-title">
                    {" "}
                    <img className="img" src={neba} />
                  </h3>
                </div>
                <div class="card-content">
                  <p>
                    Vestibulum pharetra fringilla felis sit amet tempor.
                    Interdum et malesuada.
                  </p>
                </div>
              </li>
              <li class="card">
                <div>
                  <h3 class="card-title">
                    {" "}
                    <img className="img" src={zedo} />
                  </h3>
                </div>
                <div class="card-content">
                  <p>
                    Donec ut tincidunt nisl. Vivamus eget eros id elit feugiat
                    mollis. Nam sed sem quis libero finibus tempor.
                  </p>
                </div>
              </li>
              <li class="card">
                <div>
                  <h3 class="card-title">
                    {" "}
                    <img className="img" src={neba} />
                  </h3>
                </div>
                <div class="card-content">
                  <p>
                    Donec ut tincidunt nisl. Vivamus eget eros id elit feugiat
                    mollis. Nam sed sem quis libero finibus tempor.
                  </p>
                </div>
              </li>
              <li class="card">
                <div>
                  <h3 class="card-title">
                    {" "}
                    <img className="img" src={zedo} />
                  </h3>
                </div>
                <div class="card-content">
                  <p>
                    Donec ut tincidunt nisl. Vivamus eget eros id elit feugiat
                    mollis. Nam sed sem quis libero finibus tempor.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <section class="content">
            <div class="row">
              <div class="col-md-3">
                <div class="grid support">
                  <div class="grid-body">
                    {/* <h2>For more</h2> */}
                    <hr />
                    <ul class="link-bourd">
                      <img
                        src={faq}
                        style={{ width: `300px`, height: `290px` }}
                      />
                    </ul>
                    <hr />
                  </div>
                </div>
              </div>

              <div class="col-md-9">
                <div class="grid support-content">
                  <div class="grid-body">
                    <h2>FAQ</h2>
                    <hr />
                    <div class="padding"></div>
                    <div class="row">
                      <div class="col-md-12">
                        <ul class="list-group fa-padding">
                          <li
                            class="list-group-item"
                            // data-toggle="modal"
                            data-target="#issue"
                          >
                            <div class="media">
                              <i class="fa fa-credit-card  pull-left"></i>
                              <div class="media-body">
                                <details className="detail">
                                  <summary>
                                    <strong style={{ color: `brown` }}>
                                      {" "}
                                      Can i get payment terms?
                                    </strong>
                                  </summary>
                                  <p>
                                    As a leader in tertiary education, the Sage
                                    Institute has an unrivaled reputation for
                                    the quality of its teachingAs a leader in
                                    tertiary education, the Sage Institute has
                                    an unrivaled reputation for the quality of
                                    its teaching
                                  </p>
                                </details>{" "}
                              </div>
                            </div>
                          </li>
                          <li class="list-group-item" data-target="#issue">
                            <div class="media">
                              <i class="fa fa-file-o pull-left"></i>
                              <div class="media-body">
                                <details>
                                  <summary>
                                    <strong style={{ color: `brown` }}>
                                      {" "}
                                      What are the usual methods of freight
                                      payment in transida?
                                    </strong>
                                  </summary>
                                  <p>
                                    As a leader in tertiary education, the Sage
                                    Institute has an unrivaled reputation for
                                    the quality of its teaching As a leader in
                                    tertiary education, the Sage Institute has
                                    an unrivaled reputation for the quality of
                                    its teaching
                                  </p>
                                </details>{" "}
                              </div>
                            </div>
                          </li>
                          <li class="list-group-item" data-target="#issue">
                            <div class="media">
                              <i class="fa fa-code-fork pull-left"></i>
                              <div class="media-body">
                                <details>
                                  <summary>
                                    <strong style={{ color: `brown` }}>
                                      Manually triggering dropdown not working
                                    </strong>
                                  </summary>
                                  <p>
                                    As a leader in tertiary education, the Sage
                                    Institute has an unrivaled reputation for
                                    the quality of its teaching As a leader in
                                    tertiary education, the Sage Institute has
                                    an unrivaled reputation for the quality of
                                    its teaching
                                  </p>
                                </details>{" "}
                              </div>
                            </div>
                          </li>
                          <li class="list-group-item" data-target="#issue">
                            <div class="media">
                              <i class="fa fa-plus pull-left"></i>
                              <div class="media-body">
                                <details>
                                  <summary>
                                    <strong style={{ color: `brown` }}>
                                      Add classes for respective directions to
                                      affix
                                    </strong>{" "}
                                  </summary>
                                  <p>
                                    As a leader in tertiary education, the Sage
                                    Institute has an unrivaled reputation for
                                    the quality of its teaching As a leader in
                                    tertiary education, the Sage Institute has
                                    an unrivaled reputation for the quality of
                                    its teaching
                                  </p>
                                </details>{" "}
                              </div>
                            </div>
                          </li>
                          <li class="list-group-item" data-target="#issue">
                            <div class="media">
                              <i class="fa fa-download pull-left"></i>
                              <div class="media-body">
                                <details>
                                  <summary>
                                    <strong style={{ color: `brown` }}>
                                      What is included in your service?
                                    </strong>{" "}
                                  </summary>
                                  <p>
                                    As a leader in tertiary education, the Sage
                                    Institute has an unrivaled reputation for
                                    the quality of its teaching As a leader in
                                    tertiary education, the Sage Institute has
                                    an unrivaled reputation for the quality of
                                    its teaching
                                  </p>
                                </details>{" "}
                              </div>
                            </div>
                          </li>
                        </ul>

                        <div
                          class="modal fade"
                          id="issue"
                          tabindex="-1"
                          role="dialog"
                          aria-labelledby="issue"
                          aria-hidden="true"
                        >
                          <div class="modal-wrapper">
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header bg-blue">
                                  <button
                                    type="button"
                                    class="close"
                                    data-dismiss="modal"
                                    aria-hidden="true"
                                  >
                                    x
                                  </button>
                                  <h4 class="modal-title">
                                    <i class="fa fa-cog"></i> Add drag and drop
                                    config import closes
                                  </h4>
                                </div>
                                <form action="#" method="post">
                                  <div class="modal-body">
                                    <div class="row">
                                      <div class="col-md-2">
                                        <img
                                          src="assets/img/user/avatar01.png"
                                          class="img-circle"
                                          alt=""
                                          width="50"
                                        />
                                      </div>
                                      <div class="col-md-10">
                                        <p>FAQ </p>
                                        <p>
                                          As a leader in tertiary education, the
                                          Sage Institute has an unrivaled
                                          reputation for the quality of its
                                          teaching.
                                        </p>
                                        <p>
                                          Sage Education offers certificate 3 in
                                          aged care in Brisbane to make you
                                          job-ready in the aged and disability
                                          care sector.
                                        </p>
                                      </div>
                                    </div>
                                    <div class="row support-content-comment">
                                      <div class="col-md-2">
                                        <img
                                          src="assets/img/user/avatar02.png"
                                          class="img-circle"
                                          alt=""
                                          width="50"
                                        />
                                      </div>
                                      <div class="col-md-10">
                                        <p>Posted by </p>
                                        <p>
                                          As a leader in tertiary education, the
                                          Sage Institute has an unrivaled
                                          reputation for the quality of its
                                          teaching
                                        </p>
                                        <a href="#">
                                          <span class="fa fa-reply"></span>{" "}
                                          &nbsp;Post a reply
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="modal-footer">
                                    <button
                                      type="button"
                                      class="btn1 btn1-default"
                                      data-dismiss="modal"
                                    >
                                      <i class="fa fa-times"></i> Close
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="section newsletter"
            aria-label="newsletter"
            id="contact"
          >
            <div className="container-xxl py-5">
              <div className="container">
                <p className="section-subtitle" style={{ color: `brown` }}>
                  Contact Us
                </p>

                <h2 className="h2 section-title">Contact</h2>
                {/* style={{backgroundImage: "url(" + Back + ")"}} */}

                <div className="row g-4">
                  <div className="col-12">
                    <div className="row gy-4">
                      <div className="col-md-4">
                        <h4 className="section-title text-start text-primary text-uppercase">
                          <b style={{ color: `brown` }}>Phone</b>
                          <p style={{ color: `black`, fontSize: `2.5vh` }}>
                            <i className="fa fa-phone-alt text-primary me-2"></i>
                            +251906 7777 99 / +251906 7777 55
                          </p>
                        </h4>
                      </div>
                      <div className="col-md-4">
                        <h4 className="section-title text-start text-primary text-uppercase">
                          <b style={{ color: `brown` }}>Email</b>
                          <p style={{ color: `black`, fontSize: `2.5vh` }}>
                            <i className="fa fa-envelope-open text-primary me-4"></i>
                            info@example.com
                          </p>
                        </h4>{" "}
                      </div>
                      <div className="col-md-4">
                        <h4 className="section-title text-start text-primary text-uppercase">
                          <b style={{ color: `brown` }}>Address</b>
                          <p style={{ color: `black`, fontSize: `2.5vh` }}>
                            <i className="fa fa-address-book text-primary me-4"></i>
                            Piazza Churchill Street, Eliana Hotel, 2nd floor
                          </p>
                        </h4>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                    <iframe
                      className="position-relative rounded w-100 h-100"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1314.94097177946!2d38.75041814972387!3d9.029970024300004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f137eb0829%3A0xc367647315386be6!2sEliana%20Hotel%20%7C%20Piazza!5e0!3m2!1sen!2suk!4v1678956983923!5m2!1sen!2suk"
                      frameborder="0"
                      style={{ minHeight: `350px`, border: `0` }}
                      allowfullscreen=""
                      aria-hidden="false"
                      tabindex="0"
                    ></iframe>
                  </div>
                  <div className="col-md-6">
                    <div className="wow fadeInUp" data-wow-delay="0.2s">
                      <form
                        className="contactForm"
                        style={{
                          background: `white`,
                        }}
                      >
                        <div className="row g-3  m-1">
                          <div className="col-md-6 p-3">
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                style={{
                                  borderRadius: `6px`,
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-6 p-3">
                            <div className="form-floating">
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Your Email"
                                style={{
                                  borderRadius: `6px`,
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-12 p-3">
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                id="subject"
                                placeholder="Subject"
                                style={{
                                  borderRadius: `6px`,
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-12 p-3">
                            <div className="form-floating">
                              <textarea
                                className="form-control"
                                placeholder="Leave a message here"
                                id="message"
                                style={{
                                  height: `160px`,
                                  borderRadius: `10px`,
                                }}
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-12">
                            <button
                              type="button"
                              style={{
                                background: `#f76d02`,
                                color: `white`,
                                borderRadius: `10px`,
                                width: `100px`,
                              }}
                              className="p-3"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footercomponent/>
    </div>
  );
}
// }

export default Homecomponent;
