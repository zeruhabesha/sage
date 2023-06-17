import React, { Component } from 'react';

class Navcompnent extends Component {
 
  render() {
      return (
          <div>
              <header id="header" class="fixed-top d-flex align-items-center header-transparent">
    <div class="container-fluid">

      <div class="row justify-content-center align-items-center">
        <div class="col-xl-11 d-flex align-items-center justify-content-between">
          <h1 class="logo"><a href="index.html">Beta PLC</a></h1>

          {/* <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}

          <nav id="navbar" class="navbar">
            <ul>
              <li><a class="nav-link scrollto active" href="body">Home</a></li>
              <li><a class="nav-link scrollto" href="#about">About</a></li>
              <li><a class="nav-link scrollto" href="#services">Services</a></li>
              <li><a class="nav-link scrollto " href="#portfolio">Portfolio</a></li>
              <li><a class="nav-link scrollto" href="#team">Team</a></li>
              {/* <li><a class="nav-link  " href="blogs">Blog</a></li> */}
              {/* <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a> */}
                {/* <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 2</a></li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                </ul> */}
              {/* </li> */}
              <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
              <li><a class="nav-link scrollto" href="login">Login</a></li>
            

            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
          
        </div>
      </div>

      </div>
  </header>

  
  <div id="myModal" class="modal">

  <div class="modal-content">
    <span class="close">&times;</span>
    <p>Some text in the Modal..</p>
  </div>

</div>
  
                
                </div>
      );
  }
}

export default Navcompnent;