import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import '../newtweet.css'


class NewTweet extends Component {
    render() {
        return (
            <div className='new-tweet-container'>
                <h3 className='new-tweet-title'>Compose new Tweet</h3>
                <div className='new-tweet-text'>
                        <textarea name='russell' className='new-tweet-textarea' >
                        </textarea>
                </div>
                <button className='new-tweet-button'>SUBMIT</button>
            </div>
        );
    }
}

export default NewTweet