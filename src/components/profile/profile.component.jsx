import React from 'react';

import './profile.style.css'

export const Profile = ({handleClick}) => (

    <button
        className= 'profile-btn'
        onClick= {handleClick}
    >
        Change Profile
    </button>

);