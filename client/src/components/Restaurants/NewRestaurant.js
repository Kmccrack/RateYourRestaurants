import React, { Component } from 'react';
import axios from 'axios';

class NewRestaurant extends Component {
    state = {
        restaurant: {
            img: '',
            name:'',
            description: ''
        }
    }

    handleChange = (event) => {
        const newState = { ...this.state.restaurant }
        newState[event.target.name] = event.target.value
        this.setState({ restaurant: newState })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const payload = this.state.restaurant
        axios.post('/api/restaurants/:restaurantId', payload)
        .then((res) => {
            this.props.getAllUsers()
            this.props.toggleAddUserForm()
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"
                        placeholder="username"
                        name="username"
                        value={this.state.user.username}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type="text"
                        placeholder="password"
                        value={this.state.user.password}
                        onChange={this.handleChange}
                        name="password"/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default NewRestaurant;