export const AUTHEDUSER ='AUTHEDUSER'


export function get_authedUser(authedUser) {
    return {
        type:AUTHEDUSER,
        authedUser
    }
}

