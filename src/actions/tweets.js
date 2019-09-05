export const TWEETS = 'GET_TWEETS';
export const TOGGLE_TWEET ='TOGGLE_TWEET';

export function get_tweets(tweets) {
    return {
        type:TWEETS,
        tweets
    }
}

function toggleTweet(tweet) {
    return {
        type:TOGGLE_TWEET,
        tweet
    }
}

export function handleToggleTweet(tweet) {
    return (dispatch)=>{
        return dispatch(toggleTweet(tweet))
    }
}

