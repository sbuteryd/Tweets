import {TWEETS,TOGGLE_TWEET,ADD_TWEET} from '../actions/tweets'

export function tweets(state={},action) {
    switch (action.type) {
        case TWEETS:
            return {
                ...state,
                ...action.tweets
            }
        case TOGGLE_TWEET:
            const {authedUser,id,tweet} = action.tweet
            return  {
                ...state,
                [tweet.id]:{
                    ...state[tweet.id],
                    likes: tweet.hasLiked ?
                        state[id].likes.filter((uid)=> uid !== authedUser)
                        : state[id].likes.concat(authedUser)
                }
            };
        case ADD_TWEET:
            console.log('ADD_TWEET0000---',action)
            let replyingTo= {}
            if(action.newTweet.replyingTo !==null){
                replyingTo ={
                    ...state[action.newTweet.replyingTo],
                    replies:state[action.newTweet.replyingTo]
                        .replies.concat(action.newTweet.id)
                }
            }
            console.log('replyingTo----',replyingTo)
            return  {
                ...state,
                [action.newTweet.id]:{
                    ...action.newTweet,
                },
                [replyingTo.id]:{
                    ...replyingTo
                }
            }

        default:
            return  state


    }
}