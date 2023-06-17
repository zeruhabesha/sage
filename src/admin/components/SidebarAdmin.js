import React from 'react'
import './sidebar.css'
import './style.css'
import { useDispatch } from 'react-redux';
import { Switch,Route,Link,useHistory } from 'react-router-dom';

const SidebarAdmin = () => {
	const dispach = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const handleLogout = () => {
    window.confirm('Are you sure to Logout?') && dispach(logoutUser());
  };
  return (
    <div>
         {currentUser.user.role === "students" && (
            <div id="sidebar-wrapper">
                <ul class="sidebar-nav">
                    <li class="sidebar-brand"> <Link to="/adminhome" class="scroll-link"><i class="fas fa-home"></i>Dashboard</Link>  </li>
                    <li> <Link to="/students" class="scroll-link"><i class="fas fa-users"></i>Students</Link> </li>
                    <li> <Link to="/course" class="scroll-link"><i class="fas fa-envelope"></i> Course</Link> </li>
                    <li> <Link to="/documents" class="scroll-link"><i class="fa fa-file"></i> Documents</Link> </li>
                    <li> <Link to="/profile" class="scroll-link"><i class="fa fa-file"></i> Profile</Link> </li>
                    <li> <Link onClick={handleLogout} class="scroll-link"> <i class="fa fa-sign-out"></i> Logout </Link> </li>
               </ul>
            </div> 
        )} 
        
        {currentUser.user.role === "instrucrors" && (
  <div id="sidebar-wrapper">
      <ul class="sidebar-nav">
          <li class="sidebar-brand"> <Link to="/adminhome" class="scroll-link"><i class="fas fa-home"></i>Dashboard</Link>  </li>
          <li> <Link to="/instructors" class="scroll-link"><i class="fas fa-users"></i> Instructors</Link> </li>
          <li> <Link to="/course" class="scroll-link"><i class="fas fa-envelope"></i> Course</Link> </li>
          <li> <Link to="/library" class="scroll-link"><i class="fa fa-book"></i> Library</Link> </li>
          <li> <Link to="/documents" class="scroll-link"><i class="fa fa-file"></i> Documents</Link> </li>
          <li> <Link to="/profile" class="scroll-link"><i class="fa fa-file"></i> Profile</Link> </li>
          <li> <Link onClick={handleLogout} class="scroll-link"> <i class="fa fa-sign-out"></i> Logout </Link> </li>
        </ul>
  </div> 

)} 

{currentUser.user.role === "staffs" && (
  <div id="sidebar-wrapper">
      <ul class="sidebar-nav">
          <li class="sidebar-brand"> <Link to="/adminhome" class="scroll-link"><i class="fas fa-home"></i>Dashboard</Link>  </li>
          <li> <Link to="/staffs" class="scroll-link"><i class="fas fa-users"></i> Staffs</Link> </li>
          <li> <Link to="/course" class="scroll-link"><i class="fas fa-envelope"></i> Course</Link> </li>
          <li> <Link to="/attend" class="scroll-link"><i class="fas fa-address-book"></i> Attendance</Link> </li>
          <li> <Link to="/library" class="scroll-link"><i class="fa fa-book"></i> Library</Link> </li>
          <li> <Link to="/setting" class="scroll-link"><i class="fa fa-cog"></i> Setting</Link> </li>
          <li> <Link to="/documents" class="scroll-link"><i class="fa fa-file"></i> Documents</Link> </li>
          <li> <Link to="/profile" class="scroll-link"><i class="fa fa-file"></i> Profile</Link> </li>
          <li> <Link onClick={handleLogout} class="scroll-link"> <i class="fa fa-sign-out"></i> Logout </Link> </li>
       </ul>
  </div> 
)} 

        </div> 

)}

export default SidebarAdmin


export const logoutUser = () => {
  localStorage.removeItem('currentUser');
  window.location.href = '/login';
};