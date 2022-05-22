import React, { useEffect, useState } from 'react';
import AddCard from '../AddCard/AddCard';
import Card from '../Card/Card';
import './CardContainer.css'
const CardContainer = () => {
    const[hotelInfo,setHotelInfo]= useState([]);
    useEffect(()=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(data=>setHotelInfo(data))
    },[]);
    //console.log(data[0]);
    return (
        <div className='container'>
            <div className='card-container'>
                {hotelInfo.map(hotel=><Card key={hotel.name+hotel.city} hotel={hotel} />)
                }
                <AddCard/>
            </div>
       
        </div>
    );
};

export default CardContainer;