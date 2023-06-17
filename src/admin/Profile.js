import React,{useState,useEffect,useRef} from 'react';
import { useDispatch,useSelector } from 'react-redux';

import axios from 'axios';
import {Button,Modal} from "react-bootstrap"
import {useParams} from 'react-router-dom'
import SidebarAdmin from './components/SidebarAdmin';
import Navcomponent from './components/Navcomponent';
import HomeAdmin from './components/HomeAdmin';
import './table.css';
import './table.js';


const Profile = () => {

  const [student, setStudent] = useState({})
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
   
    setStudent(values => ({...values, [name]: value}))
  }
  const handleExpandRow = (row) => {
    row.expanded = !row.expanded;
  };


const [employee,setEmployee]=useState("")

  const fileInputRef = useRef(null);
  const {id} = useParams();
  const [Profilelicants, setProfilelicants] = useState([]);
  const [session, setSession] = useState([]);
  const [start,setStart] = useState("")

  // const [file,setFile] = useState("")


  const[test,setTest]=useState("")
  const [show, setShow] = useState(false);
  const[selectedOption,setSelectedOption] = useState("")
  const [status, setStatus] = useState("Inactive");
  const kk = ["Active", "Inactive"];
  const [value,setValue] = useState("")
 
  const[technical,setTechnical] = useState("")
  const[service,setService] = useState("")
  const[blog,setBlog] = useState("")
  const[report,setReport] = useState("")
  const[setting,setSetting] = useState("")
  const[others,setOthers] = useState("")


  const [sid,setSid] = useState("")
  const [first_name,setFirstName] = useState("")
  const [middle_name,setMiddleName] = useState("")
  const [last_name,setLastName] = useState("")
  const [email,setEmail] = useState("")
    const[password,setPassword]=useState("")

  const [role,setRole] = useState("instrucrors");
  const[class_assigned,setClassAssigned]=useState("")
  const [gender,setGender] = useState("")
  const [username,setUserName] = useState("")
  const [end_date,setEndDate] = useState("")
  const [start_date,setStartDate] = useState("")
   const [dob,setDob] = useState("")
  const [phone,setPhone] = useState("")
 
  const [address,setAddress] = useState("")
  const [department, setDepartment] = useState(false);
  const [hh,setHh] = useState("")
  const [Profilerove, setProfilerove] = useState(false);
  const [Instructors, setInstructors] = useState("instrucrors");
  // const Role = ["Instructors"]
  const [tender, setTender] = useState(false);
  const [privilage, setPrivilage] = useState(false);

  const registerUser = (user) => async dispatch => {
    dispatch({
        type: 'USER_REGISTER_REQUEST'
    })

    try {
        const res = await axios.post("http://localhost:5000/addacc", user).then(res => {
            if(res.status ===200){
              alert('The data is add successfully')
              // Push to /
              window.location.href = "/Instructors";
            }else{
              Promise.reject()
            }
          })
        console.log(res);
        dispatch({
            type: 'USER_REGISTER_SUCCESS'

        })
    } catch (error) {
        dispatch({
            type: 'USER_REGISTER_FAILED',
            payload: error
        })
    }
}


  const dispatch = useDispatch()

  const handleClose = () => setShow(false);
  const handleShow = (user) => {
    setShow(true);
    setHh(user._id);
    setFirstName(user.first_name); 
    setMiddleName(user.middle_name); 
    setLastName(user.last_name); 
    setUserName(user.username);
    setEmail(user.email); 
    setPhone(user.phone);  
    setGender(user.gender); 
    setClassAssigned(user.class_assigned);
    setStartDate(user.start_date);
    setPassword(user.password);
    setRole(user.role); 
    setDepartment(user.department);
    setAddress(user.address);
    setEndDate (user.end_date);
  };

  const handleRequest1 = ()=>{
    const user = {
       
      first_name,middle_name,last_name,username,
      email,  password,
      phone, address, dob,
      department,
     class_assigned,
      role, start_date, end_date,status,
      gender:selectedOption
       
    }
     
   dispatch(registerUser(user))

   setFirstName(""); setMiddleName(""); setLastName(""); setUserName("");
   setEmail(""); setPhone("");  setGender("");  setClassAssigned("");
   setStartDate("");
   setPassword("");
   setRole(""); setDepartment("");
    setAddress("")
   setEndDate ("");setStatus("Inactive")
  
}


  
//   const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
  // console.log(currentUser);
  const AddStudent = async (e) => {
    e.preventDefault();
    try {
      // eid,rid,oid,oname,
      // tenderno,tendername,priority,
      //  start,end,location,link,file:fileInputRef.current.files[0],status
      const formData = new FormData();
      formData.Profileend("first_name",first_name);
      formData.Profileend("middle_name",middle_name);
      formData.Profileend("last_name",last_name);
      formData.Profileend("username",username);
      formData.Profileend("email", email); 
      formData.Profileend("password", password);
      formData.Profileend("gender", selectedOption);
      formData.Profileend("address", address);
            formData.Profileend("dob", dob);
            formData.Profileend("phone", phone);
            formData.Profileend("department", department);
 
      formData.Profileend("class_assigned", class_assigned);
      formData.Profileend("role", role);
            formData.Profileend("start_date", start_date);
      formData.Profileend("end_date", end_date);
           formData.Profileend("status", status);
      formData.Profileend("photo", fileInputRef.current.files[0]);
    
   
      const res = await axios.post(
        "http://localhost:5000/addacc",
        formData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

    





const handleRequest = ()=> {
  const obj = {
  
      hh,technical,service,blog,report,setting,others,
  
  }
 
 dispatch(UploadTask(obj))


}

    

 
// const [data, setData] = useState(null);

// useEffect(() => {
//     const dataFromLocalStorage = JSON.parse(localStorage.getItem("currentUser"));

//     if (dataFromLocalStorage) {
//       setData(dataFromLocalStorage);
//     }
//   }, []);
const [user1, setUser] = useState(null);

useEffect(() => {
  const dataFromLocalStorage = JSON.parse(localStorage.getItem("currentUser"));

  setUser(dataFromLocalStorage);
}, []);

//   const user = JSON.parse(localStorage.getItem('currentUser'));
const showDetail = (_id) =>
{

fetch(`http://localhost:5000/profile/${_id}`)
.then(resposne=> resposne.json())
.then(res=>setProfilelicants(res))
}
const [editModal, setEditModal] = useState(false);
const [more, setMore] = useState(false);
const [request, setRequest] = useState(false);
const [organization, setOrganization] = useState(false);
const [edittOrg, setEditOrg] = useState(false);
const [tenderadd, setTenderAdd] = useState(false);
const [tendermore, setTenderMore] = useState(false);
const [statuss, setStatuss] = useState(false);
const [tenderedit, setTendEdit] = useState(false);
const [addstud, setAddStud] = useState(false);


const handleReqClose = () => {
  setEditModal(false);
  setShow(true);
}

const currentUser = JSON.parse(localStorage.getItem('currentUser'));


const handleAddStud = () =>{
  setAddStud(true);
  setMore(false);
}
const handleStudClose = () =>{
  setAddStud(false);
  setMore(true);
}
const [formValues, setFormValues] = useState({})

// define onChange to get form values
const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
 
  setFormValues(values => ({...values, [name]: value}))
}
const handleSubmit = (event) => {
  event.preventDefault();
  axios.put(
    `http://localhost:5000/editaccount/${hh}`, formValues)
    .then(res => {
      if(res.status ===200){
        alert('A record successfuly updated')
        // Push to /
        window.location.href = "/Instructors";
      }else{
        Promise.reject()
      }
    })
    .catch(err => alert('Something went wrong! ' +err.message))
    // Push to /
  
}



  // string formatting: template literals are enclosed in backticks
 
  return (
    <div>  <Navcomponent/>  
       <div id="wrapper" class="toggled">
   <SidebarAdmin/>  
                  <div id="page-content-wrProfileer">
                <div class="container-fluid">

        <div class="main-container">
			<div class="xs-pd-20-10 pd-ltr-20"></div>

<div class="card-box mb-30">
						<div class="pd-20">
							<h4 class="text-blue h4">Profile</h4>
	
						</div> 
            <button type="button" class="btn btn-primary" onClick={() => handleAddStud()} >
  Edit Profile
</button>
{/* <h1>Hello, {user.username}</h1>
          <h2>Your email is {user.email}</h2> */}
						<div class="pb-20">
						<div>
		<p>Full Name: {currentUser.user.first_name} {" "} {currentUser.user.middle_name}</p>
		<p>Role: {currentUser.user.role}</p>
		<p>Email: {currentUser.user.email}</p>
	   </div>
							
						</div>
					</div>


          


	





  <Modal
        show={show}
       onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>More For {hh} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <table class="table table-striped table-sm">
                <tr>
                <th>Gender</th>
                                <td>{gender}</td></tr>
                           <tr>
                                <th>Phone-Number</th>
                                <td>{phone}</td>
                            </tr>
                            <tr>
                            <th>Email</th>
                            <td>{email}</td>
                            </tr>
                            <tr>
                            <th>Department</th>
                            <td>{department}</td>
                            </tr>
                            <tr>
                            <th>Address</th>
                            <td>{address}</td>
                            </tr>
                            <tr>
                            <th>Date of Birth</th>
                            <td>{dob}</td>
                            </tr>
                         
                            <tr>
                            <th>Class-Assigned</th>
                            <td>{class_assigned}</td>
                            </tr>
                            <tr>
                            <th>Start-Date</th>
                            <td>{start_date}</td>
                            </tr>
                             <tr>
                            <th>End-Date</th>
                            <td>{end_date}</td>
                            </tr>
                    </table>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>



      

<Modal
show={editModal}
onHide={handleReqClose}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title>Edit Profile {hh} </Modal.Title>
</Modal.Header>
<Modal.Body>

           
<div class="pd-ltr-20 xs-pd-20-10">
				<div class="min-height-200px">
     <form onSubmit={handleSubmit}>
            <div class="form-group">
    <label for="SID">SID</label>
    <input type="text" class="form-control" id="SID" defaultValue={sid} name="sid" onChange={handleChange} placeholder="SID"/>
  </div>
  <div class="form-group">
    <label for="FirstName">First Name</label>
    <input type="text" class="form-control" id="FirstName" defaultValue={first_name} name="first_name" onChange={handleChange} placeholder="Enter First Name"/>
  </div>
    <div class="form-group">
    <label for="MiddleName">Middle Name</label>
    <input type="text" class="form-control" id="MiddleName" defaultValue={middle_name}  name="middle_name" onChange={handleChange}  placeholder="Enter Middle Name"/>
  </div>
  <div class="form-group">
    <label for="LastName">Last Name</label>
    <input type="text" class="form-control" id="LastName"  defaultValue={last_name} name="last_name" onChange={handleChange} placeholder="Enter Last Name"/>
  </div>
    <div class="form-group">
    <label for="UserName">User Name</label>
    <input type="text" class="form-control" id="UserName"  defaultValue={username} name="username" onChange={handleChange} placeholder="Enter User Name"/>
  </div>
  <div class="form-group">
    <label for="Email">Email</label>
    <input type="email" class="form-control" id="Email" defaultValue={email} name="email" onChange={handleChange} placeholder="Enter Email"/>
  </div>
    <div class="form-group">
    <label for="Password">Password</label>
    <input type="password" class="form-control" id="Password" defaultValue={password} name="password"  onChange={handleChange} placeholder="Enter Password"/>
  </div>
  <div class="form-group">
    <label for="Gender">Gender</label>
    <div className="col" style={{ display:"flex" }}>
           <div className="radio" >
          <label>
            <input type="radio" value="Male" checked={selectedOption === "Male"}  name="gender" onChange={handleChange}/>
            Male
          </label>
        </div>
        <div className="radio" style={{ marginLeft:"15px" }}>
          <label>
            <input type="radio" value="Female" checked={selectedOption === "Female"} name="gender" onChange={handleChange}/>
            Female
          </label>
        </div>
           </div>  
             </div>
  <div class="form-group">
    <label for="Phone">Phone-Number</label>
    <input type="text" class="form-control" id="Phone"  defaultValue={phone} name="phone" onChange={handleChange} placeholder="Enter Phone-Number"/>
  </div>
  <div class="form-group">
    <label for="Department">Department</label>
    <input type="text" class="form-control" id="Department"  defaultValue={department} name="department" onChange={handleChange} placeholder="Enter Department"/>
  </div>
    <div class="form-group">
    <label for="Address">Address</label>
    <input type="text" class="form-control" id="Address"  defaultValue={address} name="address" onChange={handleChange} placeholder="Enter Address"/>
  </div>

  <div class="form-group">
    <label for="class_assigned">Class-Schedule</label>
    <input type="text" class="form-control" id="class_assigned" defaultValue={class_assigned} name="class_assigned" onChange={handleChange} placeholder="Enter Class Schedule"/>
  </div>
  <div class="form-group">
    <label for="Start">Start-Date</label>
    <input type="date" class="form-control" id="Start" defaultValue={start_date} name="start_date" onChange={handleChange} placeholder="Enter Start Date"/>
  </div>
  <div class="form-group">
    <label for="End">End-Date</label>
    <input type="date" class="form-control" id="End"  defaultValue={end_date} name="end_date" onChange={handleChange} placeholder="Enter End Date"/>
  </div>
  {/* <div class="form-group">
    <label for="Role">Role</label>
    <select value={role} id="selectId"  class="form-control" onChange={e => setRole(e.target.value)}>
                  <option value={Instructors}>  Instructors  </option>
      </select>  
      </div> */}
                 <div class="form-group">
            <label for="recipient-file" class="col-form-label">Photo:</label>
            <input type="file"ref={fileInputRef} class="form-control" id="recipient-file"/>
          </div>
         

      <div class="modal-footer">
        <Button variant="secondary" onClick={handleReqClose}>
    Close
  </Button> 
        <button type="submit" class="btn btn-primary" >Save changes</button>
      </div>
        </form> </div> </div>
</Modal.Body>
<Modal.Footer>
</Modal.Footer>
</Modal>


</div>

 </div>
 </div></div>
 </div>

  )
}

export default Profile


{/* 
import React, { useState, useEffect } from "react";

const Profile = () => {
	const currentUser = JSON.parse(localStorage.getItem('currentUser'));

	return (
	  <div>
		<p>First Name: {currentUser.user.first_name}</p>
		<p>Role: {currentUser.user.role}</p>
		<p>Email: {currentUser.user.email}</p>
		{/* add more properties as needed */}
	//   </div>
	{/* );} */}
{/* export default Profile;  */}