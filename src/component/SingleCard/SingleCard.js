import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage,faFile,faEllipsis } from '@fortawesome/free-solid-svg-icons'
import Img1 from "../../image/Ellipse 12.png"
import Img2 from "../../image/Ellipse 13.png"
import Img3 from "../../image/Ellipse 14.png"

const SingleCard = ({pd}) => {
    const {name,cmd,status,file,content}=pd
    return (
        <div className='mb-5 mt-5 '>
            <div className="card bg-white shadow">
        <div className="card-body">
            <div className='flex justify-between '>
            <button className="btn btn-sm bg-orange-300">{status}</button>
            <FontAwesomeIcon icon={faEllipsis}  />
            </div>
            <h2 className="card-title">{name}</h2>
            <p>{content}</p>
            <div className='flex justify-between '>
                <div className='flex w-5 mr-10'>
                    <img src={Img1} alt="" />
                    <img src={Img2} alt="" />
                    <img src={Img3} alt="" />
                </div>
                <div>
                    <h1><FontAwesomeIcon icon={faMessage}  /> {cmd} comments</h1>
                </div>
                <div>
                    <h1><FontAwesomeIcon icon={faFile}  /> {file} files</h1>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default SingleCard;