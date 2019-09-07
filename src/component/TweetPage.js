import React,{Component} from 'react'
import {connect} from 'react-redux'
import Tweets from './Tweets'
import NewTweet from './NewTweet'


class TweetPage extends Component {
    render() {
        const { id, replies } = this.props
        return (
            <div>
                <div>
                    <Tweets id={id}/>
                    <NewTweet id={id}/>
                </div>
                {replies.length >0&&<h3 className='replies-title'>Replies</h3>}
                <div className='replies'>
                    {replies.map((id)=>(
                        <li key={id}>
                            <Tweets key={id} id={id}/>
                        </li>
                    ))}
                </div>
            </div>
        );
    }
}

function mapStateToProps({tweets,autheduser},props) {
    const {id}= props.match.params
    return {
        id,
        replies: !tweets[id]
            ? []
            : tweets[id].replies.sort((a,b,) => tweets[b].timestamp - tweets[a].timestamp)
    }
}

export  default  connect(mapStateToProps)(TweetPage)