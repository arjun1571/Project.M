import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome , faMessage, faTasks , faPeopleGroup, faGear ,faCircle} from '@fortawesome/free-solid-svg-icons'

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
    <ul className="menu p-4 w-72 h-full bg-base-200 text-base-content text-xl">
      {/* Sidebar content here */}
      <li><h1><FontAwesomeIcon icon={faHome}  /> Home</h1></li>
      <li><h1><FontAwesomeIcon icon={faMessage} /> Messages</h1></li>
      <li><h1><FontAwesomeIcon icon={faTasks} /> Tasks</h1></li>
      <li><h1><FontAwesomeIcon icon={faPeopleGroup} /> Member</h1></li>
      <li className='mb-2'><h1><FontAwesomeIcon icon={faGear} /> Settings</h1></li>
      <hr />
      <h1 className='mt-2 mb-2'>My Project</h1>
      <li><h1><FontAwesomeIcon icon={faCircle} className='text-emerald-400'  /> Mobile App</h1></li>
      <li><h1><FontAwesomeIcon icon={faCircle} className='text-yellow-400' /> Website Redesign</h1></li>
      <li><h1><FontAwesomeIcon icon={faCircle} className='text-stone-400'/> Design System</h1></li>
      <li><h1><FontAwesomeIcon icon={faCircle} className='text-cyan-500' /> Wireframes</h1></li>
      
    </ul>
  
  </div>
</div>
    );
};

export default SideBar;