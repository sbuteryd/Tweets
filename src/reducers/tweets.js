import {TWEETS,TOGGLE_TWEET} from '../actions/tweets'

export function tweets(state={},action) {
    switch (action.type) {
        case TWEETS:
            return {
                ...state,
                ...action.tweets
            }
        case TOGGLE_TWEET:
            const {authedUser,id,tweet} = action.tweet
            return  {
                ...state,
                [tweet.id]:{
                    ...state[tweet.id],
                    likes: tweet.hasLiked ?
                        state[id].likes.filter((uid)=> uid !== authedUser)
                        : state[id].likes.concat(authedUser)
                }
            }
        default:
            return  state


    }
}