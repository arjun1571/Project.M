import React from 'react';
import Profile from "../../image/image 1.png"
import Icon from "../../image/Group 640.png"
import SideIcon from "../../image/Vector.png"
import { faShapes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
    return (
      
        <div className="navbar bg-base-100 flex justify-between">
          {/* website name and logo */}
        <div className="flex-1">
          <FontAwesomeIcon icon={faShapes} className='mx-3'  />
          <h1 className="btn btn-ghost normal-case text-xl">Project.M</h1>
          <div className='flex  lg:mx-40  '>
            <img className='lg:block hidden'  src={SideIcon} alt="" />
            <img className='lg:block hidden' src={SideIcon} alt="" />
          </div>
          <div className="form-control w-96 hidden lg:block mx-40">
            <input type="text" placeholder="Search for anathing..." className="input input-bordered lg:w-96 md:w-auto" />
          </div>
        </div>
        {/* Right site navigation section  */}
        <div className="flex-none gap-5">
          
          <div className='mx-5 hidden lg:block '>
            <img src={Icon} alt="" />
          </div>
          <div>
          <h1>Anima Agrawal</h1>
          <h1>U.P,India</h1>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            
              <div className="w-10 rounded-full">
                
                <img alt='' src={Profile}/>
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <h1 className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </h1>
              </li>
              <li><h1>Settings</h1></li>
              <li><h1>Logout</h1></li>
            </ul>
          </div>
        </div>
        </div>
    );
};

export default NavBar;