import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios';

const PostIt = styled.form`
    height: 200px;
    width: 200px;
    background-color: beige;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    input {
        background-color: beige;
    }

    textarea {
        background-color: beige;
    }
`

const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

class Restaurant extends Component {
    state = {
        user: {
            restaurants: [{}]
        }
    }
    componentDidMount(){
        console.log(this.props.user.restaurants)
        // axios.get('/api/users/')
    }

    handleChange = (event, restaurantId) => {
        console.log(restaurantId)
        this.props.user.restaurants.forEach((restaurant) => {
            if(restaurantId === restaurant._id) {
                updatedState[event.target.name] = event.target.value
            }
        })
        const updatedState = { ...this.state.restaurant }
        this.setState({ restaurant: updatedState })
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
        return (
            <FlexContainer>
                 {this.state.user.restaurants.map((restaurant, i) => ( 
                        <PostIt onBlur={(event) => this.handleSubmit(event, restaurant._id)} key={i}>
                            <button onClick={(event)=> this.deleteIdea(event, restaurant._id)}>x</button>
                            <div><input onChange={(event)=> this.handleChange(event, restaurant._id)} type="text" name="img" value={restaurant.img}></input></div>
                            <div><input onChange={(event)=> this.handleChange(event, restaurant._id)} type="text" name="title" value={restaurant.title}></input></div>
                            <div><textarea onChange={(event)=> this.handleChange(event, restaurant._id)} type="text" name="description" value={restaurant.description}></textarea></div>
                        </PostIt>
                    ))}        
            </FlexContainer>
        );
    }
}

export default Restaurant;  