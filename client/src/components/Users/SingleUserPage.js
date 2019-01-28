import React, { Component } from 'react';
import axios from 'axios'
import EditUser from './EditUser';
import Restaurant from '../Restaurants/Restaurant'
import styled from 'styled-components'

const PageStyles = styled.div`
    text-align: center;
`

class SingleUserPage extends Component {
    state = {
        user: [{}],
        editFormVisible: false
    }

    componentDidMount() {
        this.getSingleUser()
    }

    getSingleUser = () => {
        const userId = this.props.match.params.userId
        console.log(userId)
        axios.get(`/api/users/${userId}`)
            .then((res) => {
                console.log('hello')
                console.log(res)
                this.setState({ user: res.data })
            })
    }

    deleteUser = () => {
        const userId = this.props.match.params.userId
        axios.delete(`/api/users/${userId}`)
            .then(() => this.props.history.goBack())
    }

    toggleEditUserForm = () => {
        this.setState({ editFormVisible: !this.state.editFormVisible })
    }

    createNewRestaurant = () => {
        const userId = this.props.match.params.userId
        axios.post(`/api/users/${userId}/restaurants`).then((res) => {
            console.log(res.data)
            this.getSingleUser()
        })
    }

    render() {
        return (
            <PageStyles>
                <h1>{this.state.user.username}'s Restaurants</h1>
                <p>Password: {this.state.user.password}</p>
                <div><button onClick={this.toggleEditUserForm}>Edit User</button></div>
                <div>
                    <button onClick={this.createNewRestaurant}>Add Restaurant</button>
                </div>
                {this.state.editFormVisible ? <EditUser
                    getSingleUser={this.getSingleUser}
                    userId={this.state.user._id}
                    toggleEditUserForm={this.toggleEditUserForm}
                /> : null}
                <div><button onClick={this.deleteUser}>Delete User</button></div>
                    <Restaurant user={this.state.user} restaurants={this.state.user.restaurants}
                    getSingleUser={this.getSingleUser}
                    />
            </PageStyles>
        );
    }
}

export default SingleUserPage;