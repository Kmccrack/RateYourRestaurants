import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class LandingPage extends Component {
    render() {
        return (
            <div className='box primary'>
                <h1 className="logo secondary">RateYourRaunts!</h1>
                <Link to="/users">
                    <img src='https://i.imgur.com/Y2EllWy.png' alt='logo'className='buttn'/>
                </Link>
            </div>
        );
    }
}

export default LandingPage;