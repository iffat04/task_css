import React from 'react';
import './Card.css'
const Card = (props) => {
    const {name,image,address,city,state,zip,review,reviewCount,noOfBedRoom,noOfGuests,status}=props.hotel;
    return (
        <div className='card'>
            {
                status === 'DRAFT' && <div className='draft'>
                    <h1>DRAFT</h1>
                </div>
            }

            {image ?
                <div className='card-img'>
                    <img src={image} alt={name} />
                </div>
                :
                <div className='empty-img'>
            </div>    
            }
            <div className='round-details-button'>
                <div className="dot"></div>
            </div>

             {/*card details text bottom*/}
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
                            {review}
                        </div>
                        <div className="review-count">
                        {reviewCount +' reviews'}
                        </div>

                    </div>
                </div>
               
                <div className="more-details">
                    <span>{noOfBedRoom} Bedrooms</span><span className="dot-details"></span>
                    <span>Up to {noOfGuests} Guests</span><span className="dot-details"></span>
                    <span>Kids Friendly Area</span>
                </div>
            </div>
        </div>
    );
};

export default Card;