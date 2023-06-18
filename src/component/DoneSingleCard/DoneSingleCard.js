import { faEllipsis, faFile, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Img1 from "../../image/Ellipse 12.png"
import Img2 from "../../image/Ellipse 13.png"
import Img3 from "../../image/Ellipse 14.png"
const DoneSingleCard = () => {
    return (
        <div className='mb-5 mt-5 '>
            <div className="card bg-white shadow">
        <div className="card-body">
            <div className='flex justify-between '>
            <button className="btn btn-sm bg-violet-600	">Completed</button>
            <FontAwesomeIcon icon={faEllipsis}  />
            </div>
            <figure><img src="https://i.ibb.co/BCTWNr6/Plant-Care-App-Dribbble-shot-1-1.png" alt="Shoes" className='h-28' /></figure>
            <h2 className="card-title">Mobile App Design</h2>
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
                    <h1><FontAwesomeIcon icon={faFile}  /> 15  files</h1>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default DoneSingleCard;