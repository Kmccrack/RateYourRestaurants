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

    handleSubmit = (event, userId) => {
        event.preventDefault()
        const payload = this.state.restaurant
        axios.post(`/api/users/${userId}`, payload)
        .then((res) => {
            this.props.toggleNewRestaurant()
            this.props.getSingleUser()
        })
    }

   
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <div>
                        <input type="text"
                        placeholder="img"
                        name="img"
                        value={this.state.restaurant.img}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type="text"
                        placeholder="name"
                        name="name"
                        value={this.state.restaurant.name}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input type="text"
                        placeholder="description"
                        value={this.state.restaurant.description}
                        onChange={this.handleChange}
                        name="description"/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default NewRestaurant;