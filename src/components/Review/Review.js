import React, { Component } from 'react'
import { appConfig, ANIMALS, TERRITORIES } from '../../constants'
import './Review.css'
import { UserSession } from 'blockstack'
import StarRatingComponent from 'react-star-rating-component'
import { API_KEY } from '../../private'

class Review extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: '',
            code: '',
            like: '',
            dislike: '',
            codeMessage: '',
            likeMessage: '',
            dislikeMessage: '',
            ratingMessage: '',
            //   app: `${props.protocol}//${props.realm}`,
            //   rulerUsername: props.ruler,
            clickAdd: false,
            rating: 5,
            verified: false,
        }
        this.userSession = new UserSession({ appConfig })
        this.finishCode = this.finishCode.bind(this)
        this.finishLike = this.finishLike.bind(this)
        this.finishDislike = this.finishDislike.bind(this)

        this.handleChangeCode = this.handleChangeCode.bind(this);
        this.handleChangeLike = this.handleChangeLike.bind(this);
        this.handleChangeDislike = this.handleChangeDislike.bind(this);
    }

    finishCode(e) {
        e.preventDefault();
        this.setState({
            verified: true,
            codeMessage: 'Verified! Submit your review for La Mesa below.'
        });
    }
    finishLike(e) {
        e.preventDefault();
        if (this.state.verified) {
            const opennode = require('opennode');
            opennode.setCredentials(API_KEY, 'dev'); //if no parameter given, default environment is 'live'
            opennode.createCharge({
                amount: 0.0227,
                currency: "USD",
                auto_settle: true
            }).then(charge => {
                this.setState({
                    likeMessage: 'Thanks for sharing! You just earned 300 Satoshi!',
                });
                console.log(charge);
            })
                .catch(error => {
                    this.setState({
                        likeMessage: 'Error in receiving your payment!',
                    });
                    console.error(`${error.status} | ${error.message}`);
                });
        }
        else {
            this.setState({
                likeMessage: 'Please enter a valid unique code above.'
            });
        }
    }
    finishDislike(e) {
        e.preventDefault();
        if (this.state.verified) {
            const opennode = require('opennode');
            opennode.setCredentials(API_KEY, 'dev'); //if no parameter given, default environment is 'live'
            opennode.createCharge({
                amount: 0.0227,
                currency: "USD",
                auto_settle: true
            }).then(charge => {
                this.setState({
                    likeMessage: 'Thanks for sharing! You just earned 300 Satoshi!',
                });
                console.log(charge);
            })
                .catch(error => {
                    this.setState({
                        likeMessage: 'Error in sending your payment!',
                    });
                    console.error(`${error.status} | ${error.message}`);
                });
        }
        else {
            this.setState({
                dislikeMessage: 'Please enter a valid unique code above.'
            });
        }
    }

    onStarClick(nextValue, prevValue, name) {
        if (this.state.verified) {
            const opennode = require('opennode');
            opennode.setCredentials(API_KEY, 'dev'); //if no parameter given, default environment is 'live'
            opennode.createCharge({
                amount: 0.01,
                currency: "USD",
                auto_settle: true
            }).then(charge => {
                this.setState({
                    rating: nextValue,
                    ratingMessage: 'Thanks for rating! You just earned 100 Satoshi!'
                });
                console.log(charge);
            })
                .catch(error => {
                    this.setState({
                        likeMessage: 'Error in sending your payment!',
                    });
                    console.error(`${error.status} | ${error.message}`);
                });
        }
        else {
            this.setState({
                ratingMessage: 'Please enter a valid unique code above.'
            });
        }

    }
    handleChangeCode(event) {
        console.log(event.target);
        this.setState({
            code: event.target.value,
        });
    }
    handleChangeLike(event) {
        this.setState({
            like: event.target.value,
        });
    }
    handleChangeDislike(event) {
        this.setState({
            dislike: event.target.value,
        });
    }
    render() {
        const { rating } = this.state;

        return (
            <div className="Review container">
                <div className="Review section">
                    <h2>
                        Please enter your unique code.
                    </h2>
                    <form onSubmit={this.finishCode} className="input-group">
                        <input
                            className="form-control"
                            onChange={this.handleChangeCode}
                            value={this.state.code}
                            required
                            placeholder="123456789"
                        />
                        <div className="input-group-append">
                            <input type="submit" className="btn btn-primary" value="Submit" />
                        </div>
                    </form>
                    {this.state.codeMessage}
                    <br />
                </div>
                <div className="Review section">
                    <h3>How was your experience?</h3>
                    <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={rating}
                        onStarClick={this.onStarClick.bind(this)}
                    />
                    <br />
                    {this.state.ratingMessage}
                </div>
                <div className="Review section">
                    <h3>
                        What did you like?
                     </h3>
                    <form onSubmit={this.finishLike} className="input-group">
                        <input
                            className="form-control"
                            onChange={this.handleChangeLike}
                            value={this.state.like}
                            required
                            placeholder="Service was amazing!"
                        />
                        <div className="input-group-append">
                            <input type="submit" className="btn btn-primary" value="Submit" />
                        </div>
                    </form>
                    {this.state.likeMessage}
                    <br />
                </div>
                <div className="Review section">
                    <h3>
                        What didn't you like?
                </h3>
                    <form onSubmit={this.finishDislike} className="input-group">
                        <input
                            className="form-control"
                            onChange={this.handleChangeDislike}
                            value={this.state.dislike}
                            required
                            placeholder="Waiting time was a little long."
                        />
                        <div className="input-group-append">
                            <input type="submit" className="btn btn-primary" value="Submit" />
                        </div>
                    </form>
                    {this.state.dislikeMessage}
                </div>
            </div>
        );
    }
}

export default Review
