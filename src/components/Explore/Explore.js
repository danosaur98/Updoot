import React, { Component } from 'react'
import { RESTAURANTS } from '../../constants'
import './Explore.css'
import BusinessCard from '../BusinessCard/BusinessCard'

class Explore extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let options = RESTAURANTS;
        let type = "restaurants"
        return (
            <div className="Explore container">
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
                                <div class="col-sm-4">
                                    <h6>{option.rating}</h6>
                                    <h6>{option.numReviews}</h6>
                                </div>
                                <div class="col-sm-4">
                                    <h6>{option.phoneNumber}</h6>
                                    <h6>{option.address1}</h6>
                                    <h6>{option.address2}</h6>

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
