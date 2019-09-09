import React, {Component, Fragment} from 'react';
import {handleInitData} from '../actions/share'
// import * as API from '../utils/api'
import {connect} from 'react-redux'
import Dashboard from '../component/Dashboard'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'

import {BrowserRouter as Router, Route} from 'react-router-dom'
import Nav from './Nav'
import LoadingBar from 'react-redux-loading'


class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitData())
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <Nav/>
                    <div>
                        <LoadingBar/>
                        {this.props.loading ? null:
                        <div>
                            <Route path="/" exact component={Dashboard}/>
                            <Route path="/new" component={NewTweet}/>
                            <Route path="/tweet/:id" component={TweetPage}/>
                        </div>
                        }

                    </div>
                </Fragment>
            </Router>
        );
    }
}

function mapStateToProps({authedUser, tweets, users}) {
    console.log(authedUser)
    return {
        loading:authedUser ===null
    }
}

export default connect(mapStateToProps)(App);
