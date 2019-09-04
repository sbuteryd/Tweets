import {AUTHED_USER} from '../actions/autheduser'


export function authedUser(state=null,action) {
    switch (action.type) {
        case AUTHED_USER:
            return action.authedUser

        default:
            return  state
    }
}