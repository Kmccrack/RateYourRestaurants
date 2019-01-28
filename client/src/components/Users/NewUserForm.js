import React, { Component } from 'react';
import axios from 'axios'

class NewUserForm extends Component {
    state = {
        user: {
            username: '',
            password: ''
        }
    }

    handleChange = (event) => {
        const newState = { ...this.state.user }
        newState[event.target.name] = event.target.value
        this.setState({ user: newState })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const payload = this.state.user
        axios.post('/api/users', payload)
        .then((res) => {
            this.props.getAllUsers()
            this.props.toggleNewUserForm()
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

export default NewUserForm;