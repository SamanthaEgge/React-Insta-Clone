import React from 'react';

import { LoginContainer } from '../../styles/Login/Login'

class Login extends React.Component {
    state = {
        username: '',
        password: '',
    }

    handleChanges = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    login = (event) => {
        const userInput = this.state.username
        event.preventDefault()
        if (localStorage.getItem('username')) {
            localStorage.removeItem('username')
            localStorage.setItem('username', JSON.stringify(userInput));

        } else {
            localStorage.setItem('username', JSON.stringify(userInput))
        }

        this.setState({
            username: [event.target.username],
            password: [event.target.password]
        })

        window.location.reload();

    }

    render () {
        return (
            <div className='login-container'>
                <form className='login-form' onSubmit={this.login}>
                    <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={this.state.username}
                    onChange={this.handleChanges} />

                    <input 
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={this.handleChanges} />

                    <button type='submit'>Log-in</button>
                </form>
            </div>
        )
    }
}

export default Login;