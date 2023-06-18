import React, { useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const CardContainer = () => { 
    const [cdata,setCdata]=useState([])
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res?.json())
    .then(data => setCdata(data))
   
    return (
        <div className='p-5 bg-base-200 rounded-xl'>
            <div className='divide-y-4 divide-green-600 '>
            <div className=''>
            <h1 className=' '> <FontAwesomeIcon icon={faCircle}  className='text-emerald-500 mr-5' /><span className='text-xl'>To DO</span></h1>
            </div>
            {/* <hr className='mb-3 divide-emerald-400 divide-y-8' /> */}
            <div className='mt-5 '>
            {
                cdata?.map((pd)=> <SingleCard pd={pd} key={pd.id}></SingleCard> )
            }
            </div>
            </div>
        </div>
    );
};

export default CardContainer;