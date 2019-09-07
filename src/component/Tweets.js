import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleToggleTweet} from '../actions/tweets'
import {formatDate, formatTweet} from '../utils/helpers'
import {Link, withRouter} from 'react-router-dom'

class Tweets extends Component {
    changeHeart = (e,tweet) => {
        e.preventDefault()

        this.props.dispatch(handleToggleTweet(tweet))
    }
    toParent =(e,id)=>{
        e.preventDefault()
        this.props.history.push(`/tweet/${id}`)
    }
    render() {
        const { tweet } = this.props

        if (tweet === null) {
            return <p>This Tweet doesn't existd</p>

        }
        const {
            avatar, hasLiked, id, likes,parent,
            name, replies,text,
            timestamp,
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
                                    {parent&&<button
                                        onClick={(e)=>this.toParent(e,parent.id)}
                                        style={{color:'red'}}>
                                        @Replying {parent.author}
                                    </button>}

                                    <p className='textarea-text-text'>{text}</p>
                                </div>
                                <div className='textarea-like-container'>
                                    <button className='textarea-like-forward'/>
                                    {replies > 0 && <span className='textarea-like-forward-number'>{replies}</span>
                                    }
                                    <div className='textarea-like-container-list'  onClick={(e) => this.changeHeart(e,this.props)}>
                                        {hasLiked ? <button className='textarea-like-full '/>
                                        : <button
                                                type='submit'
                                                disabled={text ===''}
                                                className='textarea-like-heart'/>
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

    const parentTweet = tweet ? tweets[tweet.replyingTo]:null
    return {
        tweet: tweet ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
            : null,
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(Tweets))