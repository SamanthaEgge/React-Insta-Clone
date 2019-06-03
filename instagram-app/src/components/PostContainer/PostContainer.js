import React from 'react';

import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = (props) => {
    return (
        <div className='allposts-container'>
            {props.postData.map(post => (
                <div className='post-container'>
                    <div className='post-header'>
                        <img src={post.thumbnailUrl} alt="user thumbnail" />
                        <h2>{post.username}</h2>
                    </div>
                    <div className='post-content'>
                        <img src={post.imageUrl} alt="post" />
                        <div className='post-interaction'>
                            like and comment icons
                            <p><b>{post.likes} likes</b></p>
                        </div>
                    </div>
                    <CommentSection comments={post.comments} />
                </div>
            ))}
        </div>
    )
}

export default PostContainer;