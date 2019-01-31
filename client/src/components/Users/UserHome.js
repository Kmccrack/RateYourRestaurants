import React, { Component } from 'react';
import axios from 'axios'
import NewUserForm from './NewUserForm';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const GeneralStyles = styled.div`
    text-align: center;
    font-family: 'Playfair Display SC', serif;
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
            <GeneralStyles className='primary' >
                <nav class="navbar navbar-expand-lg navbar-light bg-light secondary">
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

                <h1>Create Your User & Get Started</h1>
                   <div className='userHome'>
                {this.state.users.map((user, i) => (
                    <div className="container">
                    <div className="row">
                    <div className="col-md-4 block">
                    <div className='users' key={i}>
                        <Link to={`/users/${user._id}`} style={{color: 'red'}} activeStyle={{color: 'white'}}><h1 class="circle" align="center">{user.username}</h1></Link>
                    </div>
                    </div>
                 </div>
                 </div>

                ))}
                </div>

                 <button onClick={this.toggleNewUserForm}>Create new user</button>
                {this.state.newUserFormVisible ? <NewUserForm
                    getAllUsers={this.getAllUsers}
                    toggleNewUserForm={this.toggleNewUserForm}
                    /> : null}

            </GeneralStyles>
        );
    }
}

export default UserHome;