import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import '../newtweet.css'

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

    render() {
        return (
            <div className='new-tweet-container'>
                <form className='new-tweet' onSubmit={this.handleSubmit}>
                    <h3 className='new-tweet-title'>Compose new Tweet</h3>
                    <div className='new-tweet-text'>
                        <textarea
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

export default NewTweet