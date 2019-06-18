import React from 'react';

import {CommentsContainer, CommentList, AddCommentSection, CommentForm, CommentInput, CommentAddBtn} from '../../styles/CommentSection/CommentSection'

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
            <CommentsContainer>
                <CommentList>
                    {this.state.comments.map(comment => {
                        return <p key={comment.id}><b>{comment.username}</b> {comment.text}</p>})}
                </CommentList>
                <AddCommentSection>
                    <CommentForm onSubmit={this.addNewComment} className='comment-form'>
                        <CommentInput 
                        type='text'
                        name='text'
                        placeholder='... Add comment'
                        value={this.state.text}
                        onChange={this.handleChanges} />
                        <CommentAddBtn className='addbutton'>
                            Post
                        </CommentAddBtn>
                    </CommentForm>
                </AddCommentSection>
            </CommentsContainer>
        )
    }
}

export default CommentSection;