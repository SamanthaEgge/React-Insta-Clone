import React from 'react';

import './CommentSection.css'

const CommentSection = (props) => {
    return (
        <div className='comment-container'>
            <div className='comment-list'>
                {props.comments.map(comment => (
                    <p><b>{comment.username}</b> {comment.text}</p>
                ))}
            </div>
        </div>
    )
}

export default CommentSection;