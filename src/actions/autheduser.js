export const AUTHED_USER ='AUTHED_USER'


export function get_authedUser(authedUser) {
    return {
        type:AUTHEDUSER,
        authedUser
    }
}

