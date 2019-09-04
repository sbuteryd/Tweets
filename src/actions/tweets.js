export const TWEETS = 'TWEETS';

export function get_tweets(tweets) {
    return {
        type:TWEETS,
        tweets
    }
}