import React from 'react'

import './PostContainer.css'
import SearchBar from '../SearchBar/SearchBar'
import PostContainer from '../PostContainer/PostContainer'
import dummyData from '../../dummy-data'

class PostsPage extends React.Component {
    state = {
        dummyData: [],
        searchData: [],
      }
    
    componentDidMount = () => {
        this.setState({
            dummyData: dummyData
        });
    }

    search = (event) => {
        const filteredPosts = this.state.dummyData.filter(post => post.username.includes(event.target.value));
        this.setState({
            searchData: filteredPosts
        })
    }

    render () {
        return (
            <div className='app-container'>
            <SearchBar search={this.search} />
            <PostContainer postData={this.state.searchData.length !== 0 ? this.state.searchData :this.state.dummyData} />
            </div>
        )
    }
}


export default PostsPage