import React,{Component} from 'react'
import {connect} from 'react-redux'
import {formatDate,formatTweet} from '../utils/helpers'

class Tweets extends Component{
    render() {
       const {
           avatar,hasLiked,id,likes,
           name,replies,text,
           timestamp} = this.props.tweet
        console.log(avatar)
        return (
            <div className='container'>
                <div className='container-border'>
                  <div className='textarea'>
                      <div className='textarea-avatar'>
                          <img className='textarea-imag' src={avatar} alt=""/>
                      </div>

                      <div className='textarea-text'>
                          <div className='textarea-info'>
                              <h3 className='textarea-info-name'>{name}</h3>
                              <p className=''>{formatDate(timestamp)}</p>
                              <p className='textarea-text-text'>{text}</p>

                          </div>
                          <div className='textarea-like'>

                          </div>
                      </div>
                  </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({tweets,users,authedUser},{id}) {
    //tweet, author, authedUser, parentTweet
    console.log('mapStateToProps----',users)
    const tweet = tweets[id]
    const parentTweet = tweets[tweet.replyingTo] ? tweets[tweet.replyingTo] :null
    return {
        tweet:formatTweet(tweet,users[tweet.author],authedUser,parentTweet)
    }
}

export default connect(mapStateToProps)(Tweets)