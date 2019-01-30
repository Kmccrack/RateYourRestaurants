import React, { Component } from 'react';
import axios from 'axios'
import EditUser from './EditUser';
import Restaurant from '../Restaurants/Restaurant'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const PageStyles = styled.div`
    text-align: center;
`

class SingleUserPage extends Component {
    state = {
        user: {
            restaurants:[]
        },
        editFormVisible: false
    }

    componentDidMount() {
        this.getSingleUser()
    }

    getSingleUser = () => {
        const userId = this.props.match.params.userId
        // console.log(userId)
        axios.get(`/api/users/${userId}`)
            .then((res) => {
                // console.log('hello')
                console.log(res.data)
                this.setState({ user: res.data })
                console.log(this.state.user.restaurants)
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
            // console.log(res.data)
            this.getSingleUser()
        })
    }

    render() {
        return (
            <PageStyles>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to={`/users`} style={{color: 'red'}} activeStyle={{color: 'white'}}><h1>RateYourRaunts</h1></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

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