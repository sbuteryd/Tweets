import React,{Component,Fragment} from 'react';
import {handleInitData} from '../actions/share'
// import * as API from '../utils/api'
import {connect} from 'react-redux'
import Dashboard  from '../component/Dashboard'
import NewTweet from './NewTweet'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Nav from './Nav'


class App extends Component{
    componentDidMount() {
        this.props.dispatch(handleInitData())
    }

    render() {
    return (
        <Fragment>
            <Router>
                <Nav/>
                <Route path="/" exact component={Dashboard}/>
                <Route path="/new" component={NewTweet}/>
            </Router>

        </Fragment>
    );
  }
}

export default connect()(App);
