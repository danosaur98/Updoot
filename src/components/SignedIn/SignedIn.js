import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { UserSession } from 'blockstack'
import EditMe from '../EditMe/EditMe'
import NavBar from '../NavBar/NavBar'
import Business from '../Business/Business'
import Review from '../Review/Review'
import Explore from '../Explore/Explore'
import { appConfig, ME_FILENAME } from '../../constants'
import './SignedIn.css'


class SignedIn extends Component {

  constructor(props) {
    super(props)
    this.userSession = new UserSession({ appConfig })
    this.state = {
      me: {},
      savingMe: false,
      savingKingdown: false,
      redirectToMe: false
    }

    this.loadMe = this.loadMe.bind(this)
    this.saveMe = this.saveMe.bind(this)
    this.signOut = this.signOut.bind(this)
  }

  componentWillMount() {
    this.loadMe()
  }

  loadMe() {
    const options = { decrypt: false }
    this.userSession.getFile(ME_FILENAME, options)
    .then((content) => {
      if(content) {
        const me = JSON.parse(content)
        this.setState({me, redirectToMe: false})
      } else {
        const me = null

        this.setState({me, redirectToMe: true})
      }
    })
  }

  saveMe(me) {
    this.setState({me, savingMe: true})
    const options = { encrypt: false }
    this.userSession.putFile(ME_FILENAME, JSON.stringify(me), options)
    .finally(() => {
      this.setState({savingMe: false})
    })
  }

  signOut(e) {
    e.preventDefault()
    this.userSession.signUserOut()
    window.location = '/'
  }

  render() {
    const username = this.userSession.loadUserData().username
    const me = this.state.me
    const redirectToMe = this.state.redirectToMe
    // if(redirectToMe) {
    //   if(window.location.pathname !== '/explore') {
    //     return (
    //       <Redirect to="/explore" />
    //     )
    //   }
    // }

    if(window.location.pathname === '/') {
      return (
        <Redirect to={`/explore`} />
      )
    }


    return (
      <div className="SignedIn">
      <NavBar username={username} signOut={this.signOut}/>
      <Switch>
              <Route
                path='/explore'
                render={
                  routeProps => <Explore/>
                }
              />
              <Route
                path='/business'
                render={
                  routeProps => <Business/>
                }
              />
              <Route
                path='/review'
                render={
                  routeProps => <Review/>
                }
              />
              <Route
                path='/me'
                render={
                  routeProps => <EditMe
                  me={me}
                  saveMe={this.saveMe}
                  username={username}
                  {...routeProps} />
                }
              />
      </Switch>
      </div>
    );
  }
}

export default SignedIn
