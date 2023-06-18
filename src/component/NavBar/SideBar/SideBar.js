import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome , faMessage, faTasks , faPeopleGroup, faGear } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-72 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><h1><FontAwesomeIcon icon={faHome} /> Home</h1></li>
      <li><h1><FontAwesomeIcon icon={faMessage} /> Messages</h1></li>
      <li><h1><FontAwesomeIcon icon={faTasks} /> Tasks</h1></li>
      <li><h1><FontAwesomeIcon icon={faPeopleGroup} /> Member</h1></li>
      <li><h1><FontAwesomeIcon icon={faGear} /> Settings</h1></li>
      <hr />
    </ul>
  
  </div>
</div>
    );
};

export default SideBar;