import React from 'react';

import './card.style.css';

export const Card = props => { 
    // console.log(props);
    return(
    <div className='card-container'>
        <img
             src={`https://robohash.org/${props.monster.id}?set=set${props.profileSet}`}
            alt='monster'
        />
        <h3> {props.monster.name} </h3>
        <p> {props.monster.email} </p>
    </div>
);
};