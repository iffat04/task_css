import React from 'react';
import './Card.css'
const Card = (props) => {
    const {name,image,address,city,state,zip,reviewCount,noOfBedRoom,noOfGuests,status}=props.hotel;
    return (
        <div className='card'>
            {image ?
                <div className='card-img'>
                    <img src={image} alt={name} />
                </div>
            // <img src={image} alt={name} />    
            :
            <div className='empty-img'>
            </div>    
            }
            <div className='round-details-button'>
                <div className="dot"></div>
            </div>
            <div className='card-details'>
                <div className="address-review">
                    <div className="address">
                        <span className='icon-address'><i class="fas fa-map-marker-alt"></i></span>
                        <div className="name-address">
                            <span className='hotel-name'>{name}</span>
                            <span className='hotel-address'>{address + ', ' + state + ', ' + city +'-' + zip}</span>
                        </div>
                    </div>
                    <div className="review-container">
                        <div className="review">

                        </div>
                        <div className="review-count">
                            
                        </div>

                    </div>
                </div>
                <hr/>
                <div className="more-details">
                    

                </div>
            </div>
        </div>
    );
};

export default Card;