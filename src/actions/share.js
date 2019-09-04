import {get_tweets} from "./tweets";
import {get_users} from "./users";
import {get_authedUser} from "./autheduser";
import * as  API from '../utils/api'


const AUTHED_USER = 'tylermcginnis'

export function handleInitData() {
    return (dispatch)=>{
        return API.getInitialData().then(([users,tweets])=>{
            get_users(users)
            get_authedUser(AUTHED_USER)
            get_tweets(tweets)

        })
    }
}