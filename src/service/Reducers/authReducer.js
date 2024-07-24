const initialstate = {
    user: null,
    isLogin: false,
    err: null
}

const authReducer = (state=initialstate, action) => {
    switch (action.type) {

        case 'REGISTER':
            return {
                ...state,
                user: action.payload,
                isLogin: false
            }

        case 'LOGIN':

            
            return {
                ...state, 
                user: action.payload, 
                isLogin: true
            }

        case 'SIGNUPERR':
            return{
                ...state,
                err: action.payload
            }

        default:
            return state;
    }
}

export default authReducer;