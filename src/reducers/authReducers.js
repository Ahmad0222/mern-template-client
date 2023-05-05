const initialState = {
    isAuthenticated: false,
    user: {}
};

const Auth = (state = initialState, action) => {
    switch (action.type) 
    {
       case 'USER_FROM_TOKEN_REQUEST':
            return { ...state, loading: true };
        case 'USER_FROM_TOKEN_SUCCESS':
            return { ...state, loading: false, isAuthenticated: true, user: action.user };
        case 'USER_FROM_TOKEN_FAILURE':
            return { ...state, loading: false, error: action.error };
        case 'USER_LOGIN_REQUEST':
            return { ...state, loading: true };
        case 'USER_LOGIN_SUCCESS':
            return { ...state, loading: false, isAuthenticated: true, user: action.user };
        case 'USER_LOGIN_FAILURE':
            return { ...state, loading: false, error: action.error };
        case 'USER_LOGOUT_REQUEST':
            return { ...state, loading: true };
        case 'USER_LOGOUT_SUCCESS':
            return { ...state, loading: false, isAuthenticated: false, user: {} };
        case 'USER_LOGOUT_FAILURE':
            return { ...state, loading: false, error: action.error };
        case 'USER_REGISTER_REQUEST':
            return { ...state, loading: true };
        case 'USER_REGISTER_SUCCESS':
            return { ...state, loading: false, isAuthenticated: true, user: action.user };
        case 'USER_REGISTER_FAILURE':
            return { ...state, loading: false, error: action.error };
        case 'USER_UPDATE_REQUEST':
            return { ...state, loading: true };
        case 'USER_UPDATE_SUCCESS':
            return { ...state, loading: false, isAuthenticated: true, user: action.user };
        case 'USER_UPDATE_FAILURE':
            return { ...state, loading: false, error: action.error };
        case 'USER_DELETE_REQUEST':
            return { ...state, loading: true };
        case 'USER_DELETE_SUCCESS':
            return { ...state, loading: false, isAuthenticated: false, user: {} };
        case 'USER_DELETE_FAILURE':
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
};

export default Auth;