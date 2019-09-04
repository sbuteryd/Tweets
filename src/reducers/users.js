import {USERS} from '../actions/users'



export function users (state,action) {
    switch (action.type) {
        case USERS:
            return {
                ...state.users.concat([action.users])
            }
    }
}