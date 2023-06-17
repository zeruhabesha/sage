
import React , { Component } from 'react';
import "./index.css";
import "./style.css";

import Blogs from './components/Blogs';
import Aboutcomponent from './components/Aboutcomponent';
import ContactUscompo from './components/pages/ContactUscompo';
import Logincomponent from './components/Logincomponent';
import Homecomponent from "./components/Homecomponent";

import { useState } from "react";
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'

import Webs from "./components/E-Learning/WebClass";
import Graphics from "./components/E-Learning/GraphicsClass";
import Lan from "./components/E-Learning/Lan";
import Exam from "./components/E-Learning/Exam";
import Business from "./components/E-Learning/BusinessClass";
import AppEn from "./components/E-Learning/AppClass";
import Journalism from "./components/E-Learning/Journ";
import Cisco from "./components/E-Learning/Cisco";
import Acadamics from "./components/Acadamics";
import Trainer from "./components/Trains";
import Gallery from "./components/Galleries";
import Research from "./components/Research";
import Elearn from "./components/E-Learning/ELearning";
import Rules from "./components/RuleRegulation";
import StudentsForm from './admin/StudentsForm';
// import LibraryForm from './admin/LibraryForm';
// import AttendanceForm from './admin/AttendanceForm';
import Documents from './admin/Documents';
import ClearnForm from './admin/ClearnForm';
// import LibraryPage from './components/LibraryPage';
import {useEffect,createContext,useReducer,useContext} from 'react';
import Admins from './admin/Admins';
import InstructorsForm from './admin/InstructorsForm';
import StaffForm from './admin/StaffForm';
import CourseForm from './admin/CourseForm';
import AttendanceForm from './admin/AttendanceForm';
import LibraryForm from './admin/LibraryForm';
import Profile from './admin/Profile'

const Routing = ()=>{
  const history = useHistory()
 const [users, setUser] = useState(null);
  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("currentUser"))
    console.log("data",data)
    if(data){
    //  setUser(data ? JSON.parse(data) : null);  
    //  dispatch({type:"USER",payload:user})
    }else{
      history.push('/login')
    }
  },[])

  // useEffect(() => {
  //   const data = JSON.parse(sessionStorage.getItem("currentUser"))
  //   console.log("data", data)
  //   if (data) {
  //     // setUser(data ? JSON.parse(data) : null);
  //     // dispatch({ type: "USER", payload: user })
  //   } else {
  //     history.push("/login")
  //   }
  // }, [])

  // Get the value of the "currentUser" key from localStorage
  const fetchUser = () => {
    const data = localStorage.getItem("currentUser");
   
  };

  return(
    <Switch>



    <Route exact path="/"><Homecomponent /> </Route>

          <Route  path="/about">  <Aboutcomponent /></Route>
          <Route  path="/blogs">  <Blogs /></Route>
          <Route path="/login">  <Logincomponent /></Route>
          <Route  path="/Academic"> <Acadamics /></Route>

          <Route path="/trainer">  <Trainer /></Route>
          {/* <Route path="/galary"  <Gallery /> </Route> */}
          <Route path="/research">  <Research /></Route>
          <Route path="/learn"> <Elearn /></Route>
          <Route path="/rules">  <Rules /> </Route>
          {/* <Route path="/lib"  <LibraryPage /> </Route> */}

          {/* E-learn */}
          <Route path="/weblearn">  <Webs /> </Route>
          <Route path="/applearn">  <AppEn /> </Route>
          <Route path="/graplearn">  <Graphics /> </Route>
          <Route path="/bunilearn" > <Business /> </Route>
          <Route path="/jornlearn" > <Journalism /> </Route>
          <Route path="/ciscolearn">  <Cisco /> </Route>
          <Route path="/lanlearn" > <Lan /> </Route>
          <Route path="/adminhome">  <Admins /> </Route>
          <Route  path="/students">  <StudentsForm /></Route>
          <Route  path="/students">  <StudentsForm /></Route> 
          <Route   path="/students/:id" > <StudentsForm/></Route>
          <Route  path="/instructors">  <InstructorsForm /></Route>
          <Route  path="/instructors/:id">  <InstructorsForm /></Route>
          <Route  path="/staffs">  <StaffForm /></Route>
          <Route  path="/staffs/:id">  <StaffForm /></Route>
          <Route  path="/course">  <CourseForm /></Route>
          <Route  path="/course/:id">  <CourseForm /></Route>
        {/* <Route exact  path="/library"  <LibraryForm/>} /> */}
         <Route   path="/attend" > <AttendanceForm/> </Route>
         <Route   path="/attend/:id">  <AttendanceForm/> </Route>

         <Route   path="/library" > <LibraryForm/> </Route>
         <Route   path="/library/:id">  <LibraryForm/> </Route>
         <Route   path="/profile">  <Profile/> </Route>
         <Route   path="/documents" > <Documents/> </Route>
          <Route   path="/clearns">  <ClearnForm/> </Route>
                   
    </Switch>
  )
}


function App() {

  return (
  
    <BrowserRouter>
      <Routing />
      
    </BrowserRouter>
   
  );
}


export default App;

