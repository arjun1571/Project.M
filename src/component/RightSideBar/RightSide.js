import React from 'react';
import Img1 from "../../image/Ellipse 12.png"
import Img2 from "../../image/Ellipse 13.png"
import Img3 from "../../image/Ellipse 14.png"
import Img4 from "../../image/Ellipse 15.png"
import Img5 from "../../image/+2.png"
import HeadingDrop from '../HeadingDropDown/HeadingDrop';

const RightSide = () => {
    return (
        <>
            <div className='flex justify-between'>
                {/* Main heading section text */}
                <div><h1 className='lg:text-4xl text-xl mx-2 font-bold'>Mobile App</h1></div>
                <div className='mt-1 flex items-center mr-3'>
                    <p className='text-2xl text-sky-500'>+</p>
                    <h1 className='mx-3 text-2xl text-sky-500'>invite</h1>
                    <img src={Img1} alt="" />
                    <img src={Img2} alt="" />
                    <img src={Img3} alt="" />
                    <img src={Img4} alt="" />
                    <img src={Img5} alt="" />
                </div>
                
            </div>
            <div className='mt-5 mx-2'>
                <HeadingDrop></HeadingDrop>
            </div>
        </>
    );
};

export default RightSide;