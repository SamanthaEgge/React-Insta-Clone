import React from 'react';

import './Login.css';

class Login extends React.Component {
    state = {
        toggle: false,
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
        event.preventDefault()

        if (localStorage.getItem('username')) {
            localStorage.removeItem('username')
            localStorage.setItem('username', JSON.stringify(event.target.username));
            this.setState({
                toggle: false
            })
        } else {
            localStorage.setItem('username', JSON.stringify(event.target.username))
            this.setState({
                toggle: true
            })
        }

        // this.setState({
        //     username: [this.state.username],
        //     password: [this.state.value]
        // })

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
                    value={this.state.password}
                    onChange={this.handleChanges} />
                    
                    <button>Log-in</button>
                </form>
            </div>
        )
    }
}

export default Login;