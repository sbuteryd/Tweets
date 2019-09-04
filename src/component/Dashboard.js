import React,{Component} from 'react'
import {connect} from 'react-redux'

class Dashboard extends Component{
    render() {
        return (
            <div>
                <ul>
                    {this.props.tweetIds.map((tweet)=>(
                        <li key={tweet}>{tweet}</li>
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