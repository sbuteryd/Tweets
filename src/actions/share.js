import {get_tweets} from "./tweets";
import {get_users} from "./users";
import {get_authedUser} from "./autheduser";
import * as  API from '../utils/api'


const AUTHED_USER = 'tylermcginnis'

export function handleInitData() {
    return (dispatch)=>{
        return API.getInitialData().then(({users,tweets})=>{
            console.log(users)
            dispatch(get_users(users))
            dispatch(get_authedUser(AUTHED_USER))
            dispatch(get_tweets(tweets))
        //
        })
    }
}