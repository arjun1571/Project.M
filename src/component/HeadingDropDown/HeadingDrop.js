import { faFilter,faAngleDown,faCalendar,faPeopleGroup,faCalendarMinus,faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const HeadingDrop = () => {
    return (
        <div className='flex justify-between '>
            {/* left side drop down button start */}
            <div className='flex'>
            <div>
                <div className="dropdown dropdown-left mr-10">
                <label tabIndex={0} className="btn m-1"> <FontAwesomeIcon icon={faFilter } className=''  />Filter <FontAwesomeIcon icon={faAngleDown } className=''  /></label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><p>Item 1</p></li>
                    <li><p>Item 2</p></li>
                </ul>
                </div>
            </div>
            <div>
            <div className="dropdown dropdown-left">
                <label tabIndex={0} className="btn m-1"> <FontAwesomeIcon icon={faCalendar } className=''  />Today <FontAwesomeIcon icon={faAngleDown } className=''  /></label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><p>Item 1</p></li>
                    <li><p>Item 2</p></li>
                </ul>
                </div>
            </div>
            <div>
            </div>
            
            </div>
            {/* left side drop down button end */}
            {/* ride side drop down button start */}
            <div className=' flex item-center divide-x'>
                <div className="dropdown dropdown-left mx-2 ">
                    <label tabIndex={0} className="btn m-1"> <FontAwesomeIcon icon={faPeopleGroup } className=''  />Share <FontAwesomeIcon icon={faAngleDown } className=''  /></label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><p>Item 1</p></li>
                        <li><p>Item 2</p></li>
                    </ul>
                </div>
                <div>
                <FontAwesomeIcon icon={faCalendarMinus } className='mx-2 text-4xl w-10 bg-cyan-500 p-2 rounded-md'  />
                </div>
                <div>
                <FontAwesomeIcon icon={faCalendarDays } className='mx-2 text-4xl w-10  p-2 rounded-md'  />
                </div>
            </div>
            {/* right side drop down button end */}
        </div>
    );
};

export default HeadingDrop;