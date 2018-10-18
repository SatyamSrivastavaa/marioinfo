const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR': 
            console.log("login failure");
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signed_out successfully');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signed_up successfully');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signed_up error');
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
}

export default authReducer;