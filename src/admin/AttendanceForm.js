import React,{useState,useEffect,useRef} from 'react';
import { useDispatch,useSelector } from 'react-redux';

import {registerTender,UploadTask} from './action/employee_action';
import axios from 'axios';
import {Button,Modal} from "react-bootstrap"
import {useParams} from 'react-router-dom'
import SidebarAdmin from './components/SidebarAdmin';
import HomeAdmin from './components/HomeAdmin';
import './table.css';
import './table.js';
import { Link} from 'react-router-dom';
import Footer from './components/Footer';
import Pagination from 'react-bootstrap/Pagination';
import Navcomponent from './components/Navcomponent';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Form,Col,  FormControl, FormGroup, Select } from "react-bootstrap";

const AttendanceForm = () => {

  const [field, setField] = useState([]);

  const[selectedOption,setSelectedOption] = useState("")
  const [activeTab, setActiveTab] = useState("home");
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
  const [applicants, setApplicants] = useState([]);
  const [applicants1, setApplicants1] = useState([]);
  const [applicants2, setApplicants2] = useState([]);
  const [applicants3, setApplicants3] = useState([]);
  // const [file,setFile] = useState("")
  const Role = ["Absent", "Present"]



  const[test,setTest]=useState("")
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("Inactive");
  const kk = ["Absent", "Present"];
 
  const [end_date,setEndDate] = useState("")
  const [start_date,setStartDate] = useState("")
  const [aid,setAid] = useState("")
  const [name,setName  ] = useState("")
  const [role,setRole  ] = useState("")
  const [hh,setHh] = useState("")

  const registerUser = (user) => async dispatch => {
    dispatch({
        type: 'USER_REGISTER_REQUEST'
    })

    try {
        const res = await axios.post("http://localhost:5000/addattend", user).then(res => {
            if(res.status ===200){
              alert('The data is add successfully')
              // Push to /
              window.location.href = "/course";
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

  };

  const handleRequest1 = ()=>{
    const user = {
      start_date, end_date,status,
  
    }
     
   dispatch(registerUser(user))

 setStatus("");
   setStartDate("");
   setEndDate ("");
  
}


  
  // const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
  // // console.log(currentUser);
  const AddStudent = async (e) => {
    e.preventDefault();
    try {
      // eid,rid,oid,oname,
      // tenderno,tendername,priority,
      //  start,end,location,link,file:fileInputRef.current.files[0],status
      const formData = new FormData();

      formData.append("start_date", start_date);
      formData.append("end_date", end_date);
      formData.append("status", status);
    
   
      const res = await axios.post(
        "http://localhost:5000/addcorse",
        formData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

 



const deletePost = (id) => {
  console.log(id);

  axios.delete(`http://localhost:5000/deletecorse/${id}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));


};


    

 

useEffect(() => {
  axios
    .get("http://localhost:5000/viewstud")
    .then((res) => {
      setApplicants(res.data);
    })
    .catch((err) => {
      console.log("Data not found" + err.message);
      // console.log(currentUser);
    }, []);
  //console.log(applicants);
});
useEffect(() => {
  axios
    .get("http://localhost:5000/viewinst")
    .then((res) => {
      setApplicants1(res.data);
    })
    .catch((err) => {
      console.log("Data not found" + err.message);
      // console.log(currentUser);
    }, []);
});
useEffect(() => {
  axios
    .get("http://localhost:5000/viewattstud")
    .then((res) => {
      setApplicants2(res.data);
    })
    .catch((err) => {
      console.log("Data not found" + err.message);
      // console.log(currentUser);
    }, []);
});
useEffect(() => {
  axios
    .get("http://localhost:5000/viewattinst")
    .then((res) => {
      setApplicants3(res.data);
    })
    .catch((err) => {
      console.log("Data not found" + err.message);
      // console.log(currentUser);
    }, []);
});

const showDetail = (_id) =>
{

fetch(`http://localhost:5000/viewcorse/${_id}`)
.then(resposne=> resposne.json())
.then(res=>setApplicants(res))
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

const handleEdit = (user) =>{
  setEditModal(true)
  setShow(false);
  setHh(user._id);
  setStartDate(user.start_date);
  setEndDate (user.end_date);
  setStatus(user.status); 

};

const handleStatus = (hh) =>{
  setStatuss(true)
  setShow(false);
}


const handleReqClose = () => {
  setEditModal(false);
  setShow(true);
}

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
    `http://localhost:5000/editattend/${hh}`, formValues)
    .then(res => {
      if(res.status ===200){
        alert('A record successfuly updated')
       
        window.location.href = "/attend";
      }else{
        Promise.reject()
      }
    })
    .catch(err => alert('Something went wrong! ' +err.message))
   
  
}


 
  return (
    <div>  <Navcomponent/>  
       <div id="wrapper" class="toggled">
   <SidebarAdmin/>  
                  
   <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Students">
<div class="card-box mb-30">
						<div class="pd-20">
							<h4 class="text-blue h4"> Students Attendance</h4>
						</div> 
           
         
            <button type="button" class="btn btn-primary" onClick={() => handleAddStud()} >
              Add Attendance
            </button>
						<div class="pb-20">
							<table
								class="table hover  data-table-export nowrap">
								<thead>
								<tr>
										<th class="table-plus datatable-nosort">Aid</th>
                    <th>Name</th>
                    <th>Role</th>
										<th>Date</th>
                    <th>Status</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
                {applicants.map((user, i) =>(
    <tr key={user._id}>
          <td>{user.aid}</td>
          <td>{user.name}</td>
          <td>{user.role}</td>
          <td>{user.status}</td>
                    <td>
                    <button type="button" class="btn btn-primary"  onClick={() =>handleEdit(user)}>
  <i className='fas fa-edit'></i>
</button>&nbsp;&nbsp;&nbsp;
<button className='btn btn-danger' onClick={()=>{ window.confirm('Are you sure to delete this data', ) 
                                   && deletePost(hh)} } > <i className='fas fa-trash'></i></button>
&nbsp;&nbsp;&nbsp;
            </td>
</tr>  ))}
								</tbody>
							</table>
						</div>
					</div>
      </Tab>
      <Tab eventKey="profile" title="Instructors">
      <div class="card-box mb-30">
						<div class="pd-20">
							<h4 class="text-blue h4"> Instructor Attendance</h4>
						</div> 
           
         
            <button type="button" class="btn btn-primary" onClick={() => handleAddStud()} >
              Add Attendance
            </button>
						<div class="pb-20">
							<table
								class="table hover  data-table-export nowrap">
								<thead>
								<tr>
										<th class="table-plus datatable-nosort">Aid</th>
                    <th>Name</th>
                    <th>Role</th>
										<th>Date</th>
                    <th>Status</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
                {applicants1.map((user, i) =>(
    <tr key={user._id}>
          <td>{user.aid}</td>
          <td>{user.name}</td>
          <td>{user.role}</td>
          <td>{user.status}</td>
                    <td>
                    <button type="button" class="btn btn-primary"  onClick={() =>handleEdit(user)}>
  <i className='fas fa-edit'></i>
</button>&nbsp;&nbsp;&nbsp;
<button className='btn btn-danger' onClick={()=>{ window.confirm('Are you sure to delete this data', ) 
                                   && deletePost(hh)} } > <i className='fas fa-trash'></i></button>
&nbsp;&nbsp;&nbsp;
            </td>
</tr>  ))}
								</tbody>
							</table>
						</div>
					</div>      </Tab>
    
    </Tabs>
                  
                  
                  <div id="page-content-wrapper">
                <div class="container-fluid">

        <div class="main-container">
			<div class="xs-pd-20-10 pd-ltr-20"></div>

       



          <Modal
        show={addstud}
       onHide={handleStudClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Attendance Students </Modal.Title>
        </Modal.Header>
        <Modal.Body>

			<div>
				<div >
        <form >
  <div >
    <table >
      <thead>
        <th>Full Name</th>
        <th>Department</th>
        <th>Action</th>
      </thead>
      <tbody>
     {/* <form onSubmit={()=> {AddStudent}}> */}
     {applicants.map((user, i) =>(
    <tr key={user._id}>
           
          <td><input type="text" readonly name="first_name" value={user.first_name} /></td>
          <td><input type="text" readonly name="department" value={user.department}/></td>
          <td>
          <div className="col" style={{ display:"flex" }}>
          <select  id="selectId"  class="form-control"   name='role' value={user.role}>
                <option >--select--</option>
                 <option value="Absent">Absent</option>
                 <option value="Present">Present</option>
                </select> 
           </div>  
           
          </td>
                </tr>
     ))}    
          {/* </form> */}

      </tbody>
    </table>
  </div>
</form>
          
						</div>
					</div>
              
          </Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>

  

<Modal
show={editModal}
onHide={handleReqClose}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title>Edit Course {hh} </Modal.Title>
</Modal.Header>
<Modal.Body>

           
<div class="pd-ltr-20 xs-pd-20-10">
				<div class="min-height-200px">
     <form onSubmit={handleSubmit}>
            
    
  <div class="form-group">
    <label for="Start">Start-Date</label>
    <input type="date" class="form-control" id="Start" defaultValue={start_date} name="start_date" onChange={handleChange} placeholder="Enter Start Date"/>
  </div>
  <div class="form-group">
    <label for="End">End-Date</label>
    <input type="date" class="form-control" id="End"  defaultValue={end_date} name="end_date" onChange={handleChange} placeholder="Enter End Date"/>
  </div>
 

      <div class="modal-footer">
        <Button variant="danger" onClick={handleReqClose}>
    Close
  </Button> 
        <button type="submit" class="btn btn-success" >Save changes</button>
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

export default AttendanceForm