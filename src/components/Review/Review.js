import React, { Component } from 'react'
import { appConfig, ANIMALS, TERRITORIES } from '../../constants'
import './Review.css'
import { UserSession } from 'blockstack'
import StarRatingComponent from 'react-star-rating-component'

class Review extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: '',
            code: '',
            like: '',
            dislike: '',
            //   app: `${props.protocol}//${props.realm}`,
            //   rulerUsername: props.ruler,
            clickAdd: false,
            rating: 5,
        }
        this.userSession = new UserSession({ appConfig })
        this.finishReview = this.finishReview.bind(this)
        this.handleChangeCode = this.handleChangeCode.bind(this);
        this.handleChangeLike = this.handleChangeLike.bind(this);
        this.handleChangeDislike = this.handleChangeDislike.bind(this);
    }
    finishReview(e) {
        e.preventDefault();
        console.log("finished!");
    }
    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
    }
    handleChangeCode(event) {
        console.log(event.target);
        this.setState({ code: event.target.value });
    }
    handleChangeLike(event) {
        this.setState({ like: event.target.value });
    }
    handleChangeDislike(event) {
        this.setState({ dislike: event.target.value });
    }
    render() {
        const { rating } = this.state;

        return (
            <div className="Review container">
                <h2>
                    Please enter your unique code.
                </h2>
                <form onSubmit={this.finishReview} className="input-group">
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
                <br />

                <h3>How was your experience?</h3>
                <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)}
                />

                <br />

                <h3>
                    What did you like?
                </h3>
                <form onSubmit={this.finishReview} className="input-group">
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

                <br />

                <h3>
                    What didn't you like?
                </h3>
                <form onSubmit={this.finishReview} className="input-group">
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
            </div>
        );
    }
}

export default Review
