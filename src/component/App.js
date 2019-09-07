import React,{Component,Fragment} from 'react';
import {handleInitData} from '../actions/share'
// import * as API from '../utils/api'
import {connect} from 'react-redux'
import Dashboard  from '../component/Dashboard'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'

import {BrowserRouter as Router,Route} from 'react-router-dom'
import Nav from './Nav'


class App extends Component{
    componentDidMount() {
        this.props.dispatch(handleInitData())
    }

    render() {
    return (
        <Fragment>
            <div>
                    <Router>
                        <Nav/>
                        <Route path="/" exact component={Dashboard}/>
                        <Route path="/new" component={NewTweet}/>
                        <Route path="/tweet/:id" component={TweetPage}/>
                    </Router>
            </div>
        </Fragment>
    );
  }
}
function mapStateToProps({authedUser,tweets,users}) {
    console.log(authedUser)
    return {
    }
}

export default connect()(App);
