import React, { Component } from 'react';
import axios from 'axios'
import NewUserForm from './NewUserForm';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const GeneralStyles = styled.div`
    text-align: center;
`

class UserHome extends Component {
    state = {
        users: [{}],
        newUserFormVisible: false
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get(`/api/users`)
        .then((res) => this.setState({ users: res.data }))
    }

    toggleNewUserForm = () => {
        this.setState({ newUserFormVisible: !this.state.newUserFormVisible })
    }

    render() {
        return (
            <GeneralStyles>
                <h1>Create Your User & Get Started</h1>
                <button onClick={this.toggleNewUserForm}>Create new user</button>
                {this.state.newUserFormVisible ? <NewUserForm
                    getAllUsers={this.getAllUsers}
                    toggleNewUserForm={this.toggleNewUserForm}
                    /> : null}
                {this.state.users.map((user, i) => (
                    <div key={i}>
                        <Link to={`/users/${user._id}`}><h3>{user.username}</h3></Link>
                    </div>
                ))}
            </GeneralStyles>
        );
    }
}

export default UserHome;