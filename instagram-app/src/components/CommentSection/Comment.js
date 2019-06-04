import React from 'react';

import './CommentSection.css'

const Comment = (props, index) => {
    return (
        <p key={index}><b>{props.comment.username}</b> {props.comment.text}</p>
    )
}

export default Comment;