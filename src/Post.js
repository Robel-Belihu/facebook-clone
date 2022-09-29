import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';



function Post({ userName, timeStamp, message, image, profile }) {
  return (
    <div className='post'>
      <div className='upper__post'>
        <div className='upper__section'>
          <Avatar className='upper__avatar' src={profile} />
          <div className='upperSection__written'>
            <h3>{userName}</h3>
            <p>{new Date(timeStamp?.toDate()).toUTCString()}</p>
          </div>
        </div>
        <p>{message}</p>
      </div>
      <img src={image} />
      <hr />
      <div className='post__footer'>
        <div className='footer__option'>
          <ThumbUpOffAltOutlinedIcon />
          <h4>Like</h4>
        </div>
        <div className='footer__option'>
          <ChatBubbleOutlineOutlinedIcon />
          <h4>Comment</h4>
        </div>
        <div className='footer__option'>
          <ReplyOutlinedIcon />
          <h4>Share</h4>
        </div>
      </div>
    </div>
  )
}

export default Post;