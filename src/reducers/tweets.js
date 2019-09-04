import {TWEETS} from '../actions/tweets'

export function tweets(state={},action) {
    switch (action.type) {
        case TWEETS:
            return {
                ...state.tweets.concat([action.tweets])
            }
        default:
            return  state


    }
}