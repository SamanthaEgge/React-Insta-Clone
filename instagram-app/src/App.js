import React from 'react';
import './App.css';

import dummyData from './dummy-data'
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import PostsPage from './components/PostContainer/PostsPage'

class App extends React.Component {
  state = {
    dummyData: [],
    searchData: []
  }

  componentDidMount () {
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
        <PostsPage />
        <PostContainer postData={this.state.searchData.length !== 0 ? this.state.searchData :this.state.dummyData} />
      </div>
    )
  }
}

export default App;
