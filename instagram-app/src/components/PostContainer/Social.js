import React from 'react';

class Social extends React.Component {
    constructor (props) {
        super (props) 
        this.state = {
        likes: this.props.data.likes,
        liked: false
    }
};

    addLike = (event) => {
        if (this.state.liked === false) {
            event.target.classList.add('fas')
            let likes = this.state.likes + 1
            this.setState({
                likes: likes,
                liked: true
            })}
            else {
                event.target.classList.remove('fas')
                let likes= this.state.likes - 1
                this.setState({
                    likes: likes,
                    like: false
                })

            }
        };

    render () {
        return (
            <div className='social-icons'>
                <i className='far fa-heart' onClick={this.addLike}></i> &nbsp; &nbsp;&nbsp;&nbsp;
                <i className='far fa-comment'></i>
                <div className='likes-text'>
                    <b>{this.state.likes} likes</b>
                </div>
            </div>
        )
    }
}

export default Social;
