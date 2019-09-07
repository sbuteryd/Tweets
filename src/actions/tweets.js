import * as API from '../utils/api'

export const TWEETS = 'GET_TWEETS';
export const TOGGLE_TWEET ='TOGGLE_TWEET';
export const ADD_TWEET ='ADD_TWEET'


export function get_tweets(tweets) {
    return {
        type:TWEETS,
        tweets
    }
}


//{ text, author, replyingTo }
function addTweets(newTweet) {
    return {
        type:ADD_TWEET,
        newTweet
    }
}


function toggleTweet(tweet) {
    return {
        type:TOGGLE_TWEET,
        tweet
    }
}


export function handleAddTweet(tweet) {
    return (dispatch)=>{
        return API.saveTweet(tweet)
            .then((tweet)=>{
            dispatch(addTweets(tweet))})
    }
}
export function handleToggleTweet(tweet) {
    return (dispatch)=>{
        return dispatch(toggleTweet(tweet))
    }
}

