import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import AdvertisedCard from './AdvertisedCard';

const Advertised = () => {
    const [getData, setGetData] = useState([])
    useEffect(()=>{
        fetch("https://b612-used-products-resale-server-side-46ra20-main.vercel.app/show-advertise")
        .then(res=>res.json())
        .then(data => setGetData(data))
    },[])
    
    return (
        <div className={`${getData<1?"hidden":""} my-10`}>
            <h2 className='divider text-center text-3xl font-semibold'>Advertised By Seller</h2>
            <div className='container grid mx-3 md:mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    getData?.map(card =><AdvertisedCard card={card} key={card._id}></AdvertisedCard>)
                }
            </div>
        </div>
    );
};

export default Advertised;