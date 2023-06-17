import react from "react";
import "./Admins.css";
import SidebarAdmin from "./components/SidebarAdmin";
import Navcomponent from "./components/Navcomponent";
function Admin() {
  return (
    <div>
      <div>  <Navcomponent/>  
       <div id="wrapper" class="toggled">
   <SidebarAdmin/>  
              
   <div id="page-content-wrProfileer">
                <div class="container-fluid">
        <div class="main-container">
			<div class="xs-pd-20-10 pd-ltr-20"></div>

      <section class="dashboard">
        

        <div class="dash-content">
          <div class="overview">
            <div class="title">
              <i class="uil uil-tachometer-fast-alt"></i>
              <span class="text">Dashboard</span>
            </div>

            <div class="boxes">
            
              <div class="box box1">
                <i class="uil uil-user"></i>
                <span class="text">Students</span>
                <span class="number">1000</span>
              </div>
              <div class="box box2">
                <i class="uil uil-user-circle"></i>
                <span class="text">Instructors</span>
                <span class="number">100</span>
              </div>
              <div class="box box3">
                <i class="uil uil-users-alt"></i>
                <span class="text">Staffs</span>
                <span class="number">100</span>
              </div>
            </div>
          </div>

          <div class="activity">
            <div class="title">
              <i class="uil uil-clock-three"></i>
              <span class="text">Recent Activity</span>
            </div>

            <div class="activity-data">
              <div class="data names">
                <span class="data-title">Name</span>
                <span class="data-list">Prem Shahi</span>
                <span class="data-list">Deepa Chand</span>
                <span class="data-list">Manisha Chand</span>
                <span class="data-list">Pratima Shahi</span>
                <span class="data-list">Man Shahi</span>
                <span class="data-list">Ganesh Chand</span>
                <span class="data-list">Bikash Chand</span>
              </div>
              <div class="data email">
                <span class="data-title">Email</span>
                <span class="data-list">Neba@gmail.com</span>
                <span class="data-list">Zedo@gmail.com</span>
                <span class="data-list">Neba@gmail.com</span>
                <span class="data-list">Zedo@gmail.com</span>
                <span class="data-list">Neba@gmail.com</span>
                <span class="data-list">Zedo@gmail.com</span>
                <span class="data-list">Neba@gmail.com</span>
              </div>
              <div class="data joined">
                <span class="data-title">Joined</span>
                <span class="data-list">2023-02-12</span>
                <span class="data-list">2023-02-12</span>
                <span class="data-list">2023-02-13</span>
                <span class="data-list">2023-02-13</span>
                <span class="data-list">2023-02-14</span>
                <span class="data-list">2023-02-14</span>
                <span class="data-list">2023-02-15</span>
              </div>
              <div class="data type">
                <span class="data-title">Type</span>
                <span class="data-list">New</span>
                <span class="data-list">Member</span>
                <span class="data-list">Member</span>
                <span class="data-list">New</span>
                <span class="data-list">Member</span>
                <span class="data-list">New</span>
                <span class="data-list">Member</span>
              </div>
              <div class="data status">
                <span class="data-title">Status</span>
                <span class="data-list">Liked</span>
                <span class="data-list">Liked</span>
                <span class="data-list">Liked</span>
                <span class="data-list">Liked</span>
                <span class="data-list">Liked</span>
                <span class="data-list">Liked</span>
                <span class="data-list">Liked</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div></div></div></div></div></div>
  );
}

export default Admin;
