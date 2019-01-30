import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class LandingPage extends Component {
    render() {
        return (
            <div className='box'>
                <h1 className="logo">RateYourRaunts!</h1>
                <Link to="/users">
                    <button>Log In</button>
                </Link>
            </div>
        );
    }
}

export default LandingPage;