import React from 'react';
import './App.css';

import withAuthenticate from './authentication/withAuthenticate'
import PostsPage from './components/PostContainer/PostsPage'
import Login from './components/Login/Login'

const App = () => {
  const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login)

  return (
    <div className='app-container'>
      <ComponentFromWithAuthenticate />
    </div>
  )
}

export default App;