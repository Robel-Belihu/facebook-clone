import React, { useState } from 'react';
import './Message.css';
import { Avatar } from '@mui/material';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import MoodOutlinedIcon from '@mui/icons-material/MoodOutlined';
import { useStateValue } from './StateProvider';
import firebase from 'firebase/compat/app';
import { db } from './firebase';


function Message() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
            profile: user.photoURL,
            userName: user.displayName,
            image: imageUrl,
        });
        setInput('');
        setImageUrl('');
    };
    return (
        <div className='message'>
            <div className='message__top '>
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className='messageText_input'
                        placeholder={`What is on your mind, ${user.displayName}?`}
                    />
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        className='messageText_inputSecond'
                        placeholder={`Image URL(Optional)`}
                    />
                    <button onClick={handleSubmit} type='submit'>
                        Hidden Submit
                    </button>
                </form>
            </div>
            <hr />
            <div className='message__bottom'>
                <div className='message__icon icon__vid'>
                    <VideoCallIcon className='icon__1' fontSize='large' />
                    <h4>Live Video</h4>
                </div>
                <div className='message__icon icon__photo'>
                    <PhotoLibraryOutlinedIcon className='icon__2' fontSize='large' />
                    <h4>Photo/Video</h4>
                </div>
                <div className='message__icon icon__smiley'>
                    <MoodOutlinedIcon className='icon__3' fontSize='large' />
                    <h4>Feeling/Activity</h4>
                </div>
            </div>
        </div >
    )
}

export default Message