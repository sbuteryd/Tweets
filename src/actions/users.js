export const USERS = 'USERS';


export function get_users(users) {
    return{
        type:USERS,
        users
    }
}