import React from 'react';
import SideBar from '../NavBar/SideBar/SideBar';
import RightSide from '../RightSideBar/RightSide';

const MainBar = () => {
    return (
        <div className='flex  '>
            <div className='w-1/4 hidden lg:block '>
            <SideBar></SideBar>
            </div>
            <div className='w-3/4 mt-10'>
                <RightSide></RightSide>
            </div>

        </div>
    );
};

export default MainBar;