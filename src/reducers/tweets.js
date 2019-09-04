import {TWEETS} from '../actions/tweets'

export function tweets(state={},action) {
    switch (action.type) {
        case TWEETS:
            return {
                ...state,
                ...action.tweets
            }
        default:
            return  state


    }
}