import { faEllipsis, faFile, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Img1 from "../../image/Ellipse 12.png"
import Img2 from "../../image/Ellipse 13.png"
import Img3 from "../../image/Ellipse 14.png"


const OnSingleCard = ({Opd}) => {
    return (
        <div className='mb-5 mt-5 '>
            <div className="card bg-white shadow">
        <div className="card-body">
            <div className='flex justify-between '>
            <button className="btn btn-sm bg-orange-300">Low</button>
            <FontAwesomeIcon icon={faEllipsis}  />
            </div>
            <div className='flex'>
            <figure><img src={Opd?.img} alt="Shoes" /></figure>
            <figure><img className='' src={Opd?.img1} alt='' /></figure>
            </div>
            <h2 className="card-title">{Opd.name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='flex justify-between '>
                <div className='flex w-5 mr-10'>
                    <img src={Img1} alt="" />
                    <img src={Img2} alt="" />
                    <img src={Img3} alt="" />
                </div>
                <div>
                    <h1><FontAwesomeIcon icon={faMessage}  /> 12 comments</h1>
                </div>
                <div>
                    <h1><FontAwesomeIcon icon={faFile}  /> 0 files</h1>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default OnSingleCard;