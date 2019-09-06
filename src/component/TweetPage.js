import React,{Component} from 'react'
import {connect} from 'react-redux'
import Tweets from './Tweets'
import NewTweet from './NewTweet'
import {Link} from 'react-router-dom'


class TweetPage extends Component {
    render() {
        const {id,tweets} = this.props;
        console.log(id,tweets)
        return (
            <div>
                <div>
                    <Tweets id={id}/>
                    <NewTweet/>
                </div>
                <div className='replies'>
                    {tweets[id].replies.length >0&&<h3 className='replies-title'>Replies</h3>}
                    {tweets[id].replies.map((id)=>(
                            <Tweets key={id} id={id}/>
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
        tweets
    }
}

export  default  connect(mapStateToProps)(TweetPage)