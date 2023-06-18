import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import DoneSingleCard from '../DoneSingleCard/DoneSingleCard';
const DoneCard = () => {
    const [Ddata,setDdata]=useState([])
    fetch('DoneData.json')
    .then(res => res?.json())
    .then(data => setDdata(data))
    return (
        <div className='p-5 bg-base-200 rounded-xl'>
            <div className='divide-y-4 divide-violet-700 '>
            <div className=''>
            <h1 className=' '> <FontAwesomeIcon icon={faCircle}  className='text-violet-700 mr-5' /><span className='text-xl'>Done</span></h1>
            </div>
            {/* <hr className='mb-3 divide-emerald-400 divide-y-8' /> */}
            <div className='mt-5 '>
            {
                Ddata?.map((dpd)=> <DoneSingleCard pd={dpd} key={dpd?.id}></DoneSingleCard> )
            }
            </div>
            </div>
        </div>
    );
};

export default DoneCard;