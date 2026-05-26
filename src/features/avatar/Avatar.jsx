import React from 'react';
import './Avatar.css';

export const Avatar = ({ name }) => {
    
    return (
        <img
            src={`https://api.adorable.io/avatars/10/${name}`}
            alt={`${name}'s profile`}
            className="avatar-profile-img"
        />
    );
}