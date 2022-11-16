import { SAVE_TOKEN, REMOVE_TOKEN } from '../actions/actions'

const initalState = {
    token: null
}


export default function authReducer(state = initalState, action) {
    console.log(action)
    switch (action.type) {
        case SAVE_TOKEN:
            console.log('SAVE_TOKEN')
           localStorage.setItem("token", action.payload)

            return {
                ...state,
                token: action.payload
            };
        case REMOVE_TOKEN:
            console.log('REMOVE_TOKEN')
            localStorage.removeItem("token")
            return {
                ...state,
                token: null
            };


        default:
            return state;
    }

}