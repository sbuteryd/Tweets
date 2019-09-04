import React,{Component} from 'react';
import {handleInitData} from '../actions/share'
import * as API from '../utils/api'
import {connect} from 'react-redux'



class App extends Component{
    componentDidMount() {
        console.log(this.props)
        this.props.dispatch(handleInitData())
    }

    render() {
    return (
        <div>

        </div>
    );
  }
}

export default connect()(App);
