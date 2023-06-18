import React from 'react';
import SideBar from '../NavBar/SideBar/SideBar';
import RightSide from '../RightSideBar/RightSide';
import CardContainer from '../CardContainer/CardContainer';
import OnPress from '../OnPressCardContainer/OnPress';

const MainBar = () => {
    return (
        <div className='flex  '>
            <div className='w-1/4 hidden lg:block '>
            <SideBar></SideBar>
            </div>
            <div className='w-3/4 mt-10'>
                <RightSide></RightSide>
                <div className='mt-10 mx-2  grid grid-cols-3 gap-5'>
                <CardContainer></CardContainer>
                <OnPress></OnPress>
                </div>
            </div>

        </div>
    );
};

export default MainBar;