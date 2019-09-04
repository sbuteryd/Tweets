export const TWEETS = 'GET_TWEETS';

export function get_tweets(tweets) {
    return {
        type:TWEETS,
        tweets
    }
}