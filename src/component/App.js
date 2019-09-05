import React,{Component} from 'react';
import {handleInitData} from '../actions/share'
import * as API from '../utils/api'
import {connect} from 'react-redux'
import Dashboard  from '../component/Dashboard'
import NewTweet from './NewTweet'


class App extends Component{
    componentDidMount() {
        this.props.dispatch(handleInitData())
    }

    render() {
    return (
        <div>
            {/*<NewTweet/>*/}
            <Dashboard/>
        </div>
    );
  }
}

export default connect()(App);
