import React, { useEffect, useState } from 'react';
import OnSingleCard from '../OnSingleCard/OnSingleCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const OnPress = () => {
    const [OnData,setOndata]=useState([])
    useEffect(()=>{
        fetch('OnPressDB.json')
        .then(res => res?.json())
        .then(data => setOndata(data))
    },[])
    return (
        <div className='p-5 bg-base-200 rounded-xl'>
            <div className='divide-y-4 divide-orange-400 '>
            <div className=''>
            <h1 className=' '> <FontAwesomeIcon icon={faCircle}  className='text-orange-600 mr-5' /><span className='text-xl'>On Progress</span></h1>
            </div>
            {/* <hr className='mb-3 divide-emerald-400 divide-y-8' /> */}
            <div className='mt-5 '>
            {
                OnData.map(Opd=><OnSingleCard key={Opd.id} Opd={Opd}></OnSingleCard>)
            } 
            </div>
            </div>
        </div>
    );
};



export default OnPress;