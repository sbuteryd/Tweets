import React,{Component} from 'react';
import {handleInitData} from '../actions/share'
import * as API from '../utils/api'
import {connect} from 'react-redux'
import Dashboard  from '../component/Dashboard'


class App extends Component{
    componentDidMount() {
        this.props.dispatch(handleInitData())
    }

    render() {
    return (
        <div>
            <Dashboard/>
        </div>
    );
  }
}

export default connect()(App);
