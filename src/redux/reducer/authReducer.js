import { LOG_IN, LOG_OUT, LOG_IN_FAILED } from '../actions/actions'

const initalState = {
    isLoggedIn: false,
    isLogInFailed: false,
}


export default function authReducer(state = initalState, action) {
    console.log(action)
    switch (action.type) {
        case LOG_IN:
            console.log('LOG_IN ')
            return {
                ...state,
                isLoggedIn: true,
                isLogInFailed: false,
            };
        case LOG_OUT:
            console.log('LOG_OUT')
            return {
                ...state,
                isLoggedIn: false,

            };
        case LOG_IN_FAILED:
            console.log('LOG_IN_FAILED')
            return {
                ...state,
                isLogInFailed: true,
            };


        default:
            return state;
    }

}