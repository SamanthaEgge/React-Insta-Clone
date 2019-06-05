import React from 'react';

import './CommentSection.css'

const Comment = (props, index) => {
    console.log(props)
    return (
        <div>
        <p key={index}><b>{props.comments.username}</b> {props.comments.text}</p>
        </div>
    )
}

export default Comment;