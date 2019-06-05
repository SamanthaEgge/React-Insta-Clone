import React from 'react';

import './CommentSection.css'
import Comment from './Comment'

// console.log(JSON.parse(localStorage.getItem('username'));

class CommentSection extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            comments: props.comments,
            input: ''
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
            text: this.state.text,
            id: Date.now(),
            username: JSON.parse(localStorage.getItem('username'))
        }

        this.setState({
            comments: [...this.state.comments, newComment],
            text: '',
        })
    }

    render () { 
        return (
            <div className='comment-container'>
                <div className='comment-list'>
                    {this.state.comments.map(comment => {
                        return <p key={comment.id}><b>{comment.username}</b> {comment.text}</p>})}
                </div>
                <div className='addcomment-section'>
                    <form onSubmit={this.addNewComment} className='comment-form'>
                        <input 
                        type='text'
                        name='text'
                        placeholder='... Post'
                        value={this.state.text}
                        onChange={this.handleChanges} />
                        <button className='addbutton'>
                            Add Comment
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CommentSection;