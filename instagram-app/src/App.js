import React from 'react';
import './App.css';

import PostsPage from './components/PostContainer/PostsPage'
import withAuthenticate from './authentication/withAuthenticate'

const App = () => {
  const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)

  return (
    <div className='app-container'>
      <ComponentFromWithAuthenticate />
    </div>
  )
}

export default App;
