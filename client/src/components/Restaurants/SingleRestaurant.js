import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const PageStyles = styled.div`
    text-align: center;
`

class SingleRestaurant extends Component {
    state = {
        restaurant: {
            img:'',
            name:'',
            description:''
        }
      
    }

    componentDidMount() {
        this.getSingleRestaurant()
    }

    getSingleRestaurant = () => {
        const restaurantId = this.props.match.params.restaurantId
        axios.get(`/api/restaurants/${restaurantId}`)
            .then((res) => {
                this.setState({ restaurant: res.data })
            })
    }

    deleteRestaurant = () => {
        const restaurantId = this.props.match.params.restaurantId
        axios.delete(`/api/restaurants/${restaurantId}`)
            .then(() => this.props.history.goBack())
    }

    createNewRestaurant = () => {
        const restaurantId = this.props.match.params.restaurantId
        axios.post(`/api/restaurants/${restaurantId}/restaurants`).then((res) => {
            // console.log(res.data)
            this.getSingleRestaurant()
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



                        <fieldset class="rating">
    <legend>Please rate:</legend>
    <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="Rocks!">5 stars</label>
    <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="Pretty good">4 stars</label>
    <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="Meh">3 stars</label>
    <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="Kinda bad">2 stars</label>
    <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="Sucks big time">1 star</label>
</fieldset>
            <img src={this.state.restaurant.img} alt={this.state.restaurant.name} />
                <h1>{this.state.restaurant.name}</h1>
                <p>Description: {this.state.restaurant.description}</p>
                <div>
                    <button onClick={this.createNewRestaurant}>Add Restaurant</button>
                </div>
                <div><button onClick={this.deleteUser}>Delete Restaurant</button></div>
   
            </PageStyles>
        );
    }
}


export default SingleRestaurant;