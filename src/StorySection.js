import { Avatar } from '@mui/material';
import React from 'react';
import './StorySection.css';

function StorySection({ image, profile, title }) {
    return (
        <div style={{
            backgroundImage: `url(${image})`
        }}
            className='story__section'
        >
            <Avatar className='story__avatar' src={profile} />
            <h4>{title}</h4>
        </div >
    )
}

export default StorySection