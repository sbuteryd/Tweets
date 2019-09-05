import React,{Component} from 'react'
import {connect} from 'react-redux'
import Tweets from './Tweets'
import {formatDate} from '../utils/helpers'

class Dashboard extends Component{
    render() {
        return (
            <div className='container-Dashboard'>
                <h3 className='container-Dashboard-title'>Your Timeline</h3>
                <ul>
                    {this.props.tweetIds.map((id)=>(
                        // 一个一个把tweet发送给 Tweets组件
                        <li key={id}>
                            <Tweets id={id}/>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({tweets}) {
    const tweetsList = Object.keys(tweets)
    return {
        tweetIds:tweetsList.sort((a,b)=>b.timestamp - a.timestamp)
    }

}

export default connect(mapStateToProps)(Dashboard)