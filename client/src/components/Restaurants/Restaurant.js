import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios';
import {Link} from 'react-router-dom';


const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

class Restaurant extends Component {
    state = {
    
    restaurants: {
        img:'',
        name:'',
        description:''
    },
    newRestaurantFormVisible: false
      
    }
    componentDidMount(){
        this.setState({restaurants: this.props.restaurants})
       
    }


    handleChange = (event, restaurantId) => {
        console.log(restaurantId)
        this.props.restaurants.forEach((restaurant) => {
            if(restaurantId === restaurant._id) {
                updatedState[event.target.name] = event.target.value
            }
        })
        const updatedState = { ...this.state.restaurant }
        this.setState({ restaurants: updatedState })
    }

    handleSubmit = (event, restaurantId) => {
        event.preventDefault()
        const data = this.state.restaurant
        axios.patch(`/api/restaurants/${restaurantId}`, data)
        .then(() => this.props.getSingleUser)
    }

    deleteRestaurant = (event, restaurantId) => {
        event.preventDefault()
        console.log(restaurantId)
        axios.delete(`/api/restaurants/${restaurantId}`).then(() => {
            this.props.getSingleUser()
        })
    }

    render() {

       const restaurantList = this.props.restaurants.map((restaurant, i) => ( 
       <form className='restaurant'onBlur={(event) => this.handleSubmit(event, restaurant._id)} key={i}>
        <button onClick={(event)=> this.deleteRestaurant(event, restaurant._id)}>x</button>
           <img src={restaurant.img} alt={restaurant.name} />
         <Link to={`/restaurants/${restaurant._id}`}> <h1>{restaurant.name}</h1></Link>
           <p>{restaurant.description}</p>
       </form>
        ))


        return (
            <FlexContainer className='restaurants'>
                    {restaurantList}    
            </FlexContainer>
        );
    }
}

export default Restaurant;  