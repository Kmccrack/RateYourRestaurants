import React, { Component } from 'react';
import axios from 'axios'
import EditUser from './EditUser';
import Restaurant from '../Restaurants/Restaurant'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import NewRestaurant from '../Restaurants/NewRestaurant';

const PageStyles = styled.div`
    text-align: center;
`

class SingleUserPage extends Component {
    state = {
        user: {
            restaurants:[]
        },
        // addUserFormVisible: false,
        newRestaurantVisible: false
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

    togglenewRestaurant = () => {
        this.setState({ newRestaurantVisible: !this.state.newRestaurantVisible })
    }

    createNewRestaurant = () => {
        const restaurantId = this.props.match.params.restaurantId
        axios.post(`/api/users/${restaurantId}/restaurants`).then((res) => {
            // console.log(res.data)
            this.getSingleUser()
        })
    }

    render() {
        return (
            <PageStyles>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/users">
                    <img src='https://i.imgur.com/Y2EllWy.png' alt='logo'/>
                </Link>
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
                    <button onClick={this.togglenewRestaurant}>Add Restaurant</button>
                </div>
                {this.state.editFormVisible ? <EditUser
                    getSingleUser={this.getSingleUser}
                    userId={this.state.user._id}
                    toggleEditUserForm={this.toggleEditUserForm}
                /> : null}
                 {this.state.newRestaurantVisible ? <NewRestaurant
                    getSingleUser={this.getSingleUser}
                    restaurantId={this.state.restaurantId}
                    user={this.state.user}
                    togglenewRestaurant={this.togglenewRestaurant}
                /> : null}
                <div><button onClick={this.deleteUser}>Delete User</button></div>
                    <Restaurant user={this.state.user} restaurants={this.state.user.restaurants}
                    getSingleUser={this.getSingleUser}
                    />


                    <footer class="page-footer font-small gray fixed-bottom">

<div class="footer-copyright text-center py-3">© 2019 Copyright:
  <Link to={`/`}>Kat Inc</Link> 
</div>


</footer>

            </PageStyles>
        );
    }
}

export default SingleUserPage;