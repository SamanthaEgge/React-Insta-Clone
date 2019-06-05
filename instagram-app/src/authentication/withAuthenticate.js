import React from 'react';

import App from '../App'

const withAuthenticate = (Page) => (LoginTest) => 
    class extends React.Component {
        state = {
            loggedIn: false
        }

        componentDidMount = () => {
            if (localStorage.getItem('username')) {
                this.setState({
                    loggedIn: true
                })
            } else {
                this.setState({
                    loggedIn: false
                })
            }
        }

        render() {
            if (this.state.loggedIn === true) {
                return <Page />
            } else {
                return <LoginTest />
            }
        }
    }


export default withAuthenticate;