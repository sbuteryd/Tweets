import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import '../newtweet.css'
import {connect} from 'react-redux'
import {handleAddTweet} from '../actions/tweets'
class NewTweet extends Component {
    state = {
        text:''
    }
    handleChange=(e)=>{
        e.preventDefault()
        this.setState(({
            text:e.target.value
        }))
    }
    handleSubmit =(e)=>{
        e.preventDefault()
        const text = this.state.text
        const {authedUser,id} = this.props
        console.log('---newTweet',this.props,'------')
        const author = authedUser;
        const replyingTo = id
        this.props.dispatch(handleAddTweet({text,author,replyingTo}))
        this.setState(({
            text:''
        }))
    }
    //{ text, author, replyingTo }
    render() {
        return (
            <div className='new-tweet-container'>
                <form className='new-tweet' onSubmit={this.handleSubmit}>
                    <h3 className='new-tweet-title'>Compose new Tweet</h3>
                    <div className='new-tweet-text'>
                        <textarea
                            value={this.state.text}
                            onChange={this.handleChange}
                            name='russell'
                            className='new-tweet-textarea' >
                        </textarea>
                    </div>
                    <button
                        disabled={this.state.text ===''}
                        className='new-tweet-button'
                    >
                        SUBMIT
                    </button>
                </form>

            </div>
        );
    }
}

function mapStateToProps({authedUser,users,tweets},{id}) {
    return {
        authedUser,
        tweets,
        users,
        id,
    }
}

export default connect(mapStateToProps)(NewTweet)