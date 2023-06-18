import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

const SingleCard = ({pd}) => {
    return (
        <div className='mb-5 mt-5 '>
            <div className="card bg-white shadow">
        <div className="card-body">
            <div className='flex justify-between '>
            <button className="btn btn-sm bg-orange-300">Small</button>
            <FontAwesomeIcon icon={faEllipsis}  />
            </div>
            <h2 className="card-title">{pd.name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
        </div>
    );
};

export default SingleCard;