import React from 'react'
import './sidebar.css'
import './style.css'
import { useDispatch } from 'react-redux';
import { Switch,Route,Link,useHistory } from 'react-router-dom';

import { logoutUser } from '../action/employee_action'

const Navcomponent = () => {
	const dispach = useDispatch();
  return (
    <div>
       
	   <nav class="navbar navbar-expand navbar-dark navbars"> <a href="#menu-toggle" id="menu-toggle" class="navbar-brand"><span class="navbar-toggler-icon"></span></a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
            <div class="collapse navbar-collapse" id="navbarsExample02">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active"> <a class="nav-link" href="#">SAGE </a> </li>
                </ul>
                <form class="form-inline my-2 my-md-0"> </form>
            </div>
        </nav>
       


      
		
        
    </div>
  )
}

export default Navcomponent