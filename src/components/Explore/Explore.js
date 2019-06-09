import React, { Component } from 'react'
import { RESTAURANTS, SPONSORED } from '../../constants'
import './Explore.css'
import BusinessCard from '../BusinessCard/BusinessCard'
import StarRatingComponent from 'react-star-rating-component'

class Explore extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let options = RESTAURANTS;
        let sponsored = SPONSORED;
        let type = "restaurants"
        return (
            <div className="Explore container">
                <h2>Sponsored</h2>
                {sponsored.map((option, index) => {
                    return (
                        <div className="card">
                            <h4 className="card-header">{option.name}</h4>
                            <div class="row">
                                <div className="col-sm-4">
                                    <img className="card-img-top"
                                        src={`/${type}/${option.id}.jpg`}
                                        alt={option.name}
                                    /></div>
                                <div class="Reviews col-sm-4">
                                    <h6 className="Reviews-Info"><StarRatingComponent
                                        name="rate1"
                                        starCount={5}
                                        value={option.rating}
                                        editing={false}
                                    />
                                    </h6>
                                    <h6 className="Reviews-Info">Number of Reviews: {option.numReviews}</h6>
                                    <h6 className="Reviews-Info">Cost: {option.cost}</h6>
                                    <h6 className="Reviews-Info">Food Type: {option.foodType}</h6>
                                </div>
                                <div class="Contact col-sm-4">
                                    <h6 className="Contact-Info">{option.phoneNumber}</h6>
                                    <h6 className="Contact-Info">{option.address1}</h6>
                                    <h6 className="Contact-Info">{option.address2}</h6>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <h2>Businesses Near You</h2>
                {options.map((option, index) => {
                    return (
                        <div className="card">
                            <h4 className="card-header">{option.name}</h4>
                            <div class="row">
                                <div className="col-sm-4">
                                    <img className="card-img-top"
                                        src={`/${type}/${option.id}.jpg`}
                                        alt={option.name}
                                    /></div>
                                <div class="Reviews col-sm-4">
                                    <h6 className="Reviews-Info"><StarRatingComponent
                                        name="rate1"
                                        starCount={5}
                                        value={option.rating}
                                        editing={false}
                                    />
                                    </h6>
                                    <h6 className="Reviews-Info">Number of Reviews: {option.numReviews}</h6>
                                    <h6 className="Reviews-Info">Cost: {option.cost}</h6>
                                    <h6 className="Reviews-Info">Food Type: {option.foodType}</h6>
                                </div>
                                <div class="Contact col-sm-4">
                                    <h6 className="Contact-Info">{option.phoneNumber}</h6>
                                    <h6 className="Contact-Info">{option.address1}</h6>
                                    <h6 className="Contact-Info">{option.address2}</h6>

                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Explore
