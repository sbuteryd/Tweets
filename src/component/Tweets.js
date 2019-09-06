import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleToggleTweet} from '../actions/tweets'
import {formatDate, formatTweet} from '../utils/helpers'
import {Link} from 'react-router-dom'

class Tweets extends Component {
    changeHeart = (e,tweet) => {
        e.preventDefault()

        this.props.dispatch(handleToggleTweet(tweet))
    }

    render() {
        const {
            avatar, hasLiked, id, likes,
            name, replies, text,
            timestamp
        } = this.props.tweet
        return (
            <Link className='tweet' to={`/tweet/${id}`}>
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

                                <div className='textarea-like-container'>
                                    <button className='textarea-like-forward'/>
                                    {replies > 0 && <span className='textarea-like-forward-number'>{replies}</span>
                                    }
                                    <div className='textarea-like-container-list'  onClick={(e) => this.changeHeart(e,this.props)}>
                                        {hasLiked ? <button className='textarea-like-full '/>
                                        : <button className='textarea-like-heart'/>
                                        }
                                    </div>


                                    {likes > 0 && <span className='textarea-like-like-number'>{likes}</span>
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}

function mapStateToProps({tweets, users, authedUser}, {id}) {
    const tweet = tweets[id]
    const parentTweet = tweets[tweet.replyingTo] ? tweets[tweet.replyingTo] : null
    return {
        tweet: formatTweet(tweet, users[tweet.author], authedUser, parentTweet),
        authedUser
    }
}

export default connect(mapStateToProps)(Tweets)