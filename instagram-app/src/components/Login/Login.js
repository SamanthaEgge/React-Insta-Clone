import React from 'react';

import './Login.css';

const Login = () => {
    state = {
        toggle: false
    }

    login = (event) => {
        event.preventDefault();
        if (localStorage.getItem('username')) {
            localStorage.removeItem('username')
            localStorage.setItem('username', JSON.stringify(event.target.value));
            this.setState({
                toggle: false
            })
        } else {
            localStorage.setItem('username', JSON.stringify(event.target.value))
            this.setState({
                toggle: true
            })
        }
    }

    return(
        <div className='login-container'>
            <form className='login-form' onSubmit={login}>
                <input
                type='text'
                placeholder='Username'
                value='username' />
                <input 
                type='text'
                placeholder='Password'
                value='password' />
                <button>Log-in</button>
            </form>
        </div>
    )
}

export default Login;