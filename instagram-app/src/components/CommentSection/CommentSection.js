import React from 'react';

import './CommentSection.css'

class CommentSection extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            comments: this.props.comments,
            id: '',
        }
    }

    handleChanges = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    addNewComment = (event) => {
        event.preventDefault();

        const newComment = {
            comment: this.state.commentInput,
            id: Date.now(),
        }

        this.setState({
            comments: [...this.state.comments, newComment],
            commentInput: '',
        })
    }

    render () { 
        return (
            <div className='comment-container'>
                <div className='comment-list'>
                    {this.state.comments.map((comment, index) => (
                        <p key={index}><b>{comment.username}</b> {comment.text}</p>
                    ))}
                </div>
                <div className='addcomment-section'>
                    <form onSubmit={this.addNewComment} className='comment-form'>
                        <input 
                        type='text'
                        name='commentInput'
                        placeholder='Add a comment . . .'
                        value={this.state.text}
                        onChange={this.handleChanges} />
                    </form>
                </div>
            </div>
        )
    }
}

export default CommentSection;