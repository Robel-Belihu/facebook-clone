import React, { useEffect, useState } from 'react';
import './Feed.css';
import StorySection from './StorySection';
import Message from './Message';
import Post from './Post';
import { db } from './firebase';

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts')
            .orderBy('timeStamp', 'desc')
            .onSnapshot(snapshot => (
                setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
            ))
    }, []);

    return (
        <div className='middle__section'>
            <div className='feed'>
                <StorySection image='https://cdn.britannica.com/57/199057-050-CCE5410A/Bradley-Cooper-2008.jpg'
                    profile='https://rayhaber.com/wp-content/uploads/2021/01/ludwig-van-beethoven-kimdir.jpg'
                    title='Beethoven' />
                <StorySection image='https://images.pexels.com/photos/772662/pexels-photo-772662.jpeg'
                    profile='https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=600'
                    title='Lovren' />
                <StorySection image='https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?auto=compress&cs=tinysrgb&w=600'
                    profile='https://images.pexels.com/photos/18495/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
                    title='Roman' />
                <StorySection image='https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=600'
                    profile='https://images.pexels.com/photos/813940/pexels-photo-813940.jpeg?auto=compress&cs=tinysrgb&w=600'
                    title='Martin' />
                <StorySection image='https://images.pexels.com/photos/307847/pexels-photo-307847.jpeg?auto=compress&cs=tinysrgb&w=600'
                    x profile='https://images.pexels.com/photos/2853592/pexels-photo-2853592.jpeg?auto=compress&cs=tinysrgb&w=600'
                    title='Vee' />
            </div >
            <Message />

            {
                posts.map((post) => (
                    <Post
                        key={post.data.id}
                        profile={post.data.profile}
                        userName={post.data.userName}
                        timeStamp={post.data.timeStamp}
                        message={post.data.message}
                        image={post.data.image}
                    />
                ))
            }

        </div>

    )
}

export default Feed