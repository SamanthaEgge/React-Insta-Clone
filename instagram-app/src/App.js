import React from 'react';
import './App.css';

import dummyData from './dummy-data'
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'

class App extends React.Component {
  state = {
    dummyData: []
  }

   componentDidMount () {
    this.setState({
      dummyData: dummyData
    });
   }

  render () {
    return (
      <div className='app-container'>
        <SearchBar />
        <PostContainer postData={this.state.dummyData} />
      </div>
    )
  }
}

export default App;
