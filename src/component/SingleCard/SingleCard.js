import React from 'react';

const SingleCard = ({pd}) => {
    return (
        <div className='mb-5 '>
            <div className="card bg-base-200 shadow">
        <div className="card-body">
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