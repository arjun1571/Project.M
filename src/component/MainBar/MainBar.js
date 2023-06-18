import React from 'react';
import SideBar from '../NavBar/SideBar/SideBar';
import RightSide from '../RightSideBar/RightSide';
import CardContainer from '../CardContainer/CardContainer';
import OnPress from '../OnPressCardContainer/OnPress';
import DoneCard from '../DoneCartContainrer/DoneCard';

const MainBar = () => {
    return (
        <div className='flex mr-10 '>
            <div className='w-1/4 hidden lg:block '>
            <SideBar></SideBar>
            </div>
            <div className='w-3/4 mt-5'>
                <RightSide></RightSide>
                <div className='mt-5 mx-2  grid lg:grid-cols-3 grid-cols-1 w-auto gap-5'>
                <CardContainer></CardContainer>
                <OnPress></OnPress>
                <DoneCard></DoneCard>
                </div>
            </div>

        </div>
    );
};

export default MainBar;