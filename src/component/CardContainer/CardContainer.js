import React, { useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const CardContainer = () => { 
    const [cdata,setCdata]=useState([])
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res?.json())
    .then(data => setCdata(data))
   
    return (
        <div className='  '>
            {
                cdata?.map((pd)=> <SingleCard pd={pd} key={pd.id}></SingleCard> )
            }
        </div>
    );
};

export default CardContainer;