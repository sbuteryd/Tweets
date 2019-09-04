import {AUTHED_USER} from '../actions/autheduser'


export function authedUser(state={},action) {
    switch (action.type) {
        case AUTHED_USER:
            return {
                ...state.authedUser = action.authedUser
            }
        default:
            return  state
    }
}