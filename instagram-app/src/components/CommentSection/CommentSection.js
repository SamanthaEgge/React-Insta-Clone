import React from 'react';

import './CommentSection.css'
import Comment from './Comment'

class CommentSection extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            comments: props.comments,
            input: ''
            // id: '',
            // text: '',
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
            user: 'samanthaegge'
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
                    {this.state.comments.map(comments => {
                        return <p key={comments.id}><b>{comments.username}</b> {comments.text}</p>})}
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