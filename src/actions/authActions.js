import axios from 'axios';
const API_URL = 'https://newecom.stagingkey.com';

export const userLogin = (login) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'USER_LOGIN_REQUEST' });
            const { data } = await axios.post(`${API_URL}/auth/login`, login );
            localStorage.setItem('xat', data.token);
            dispatch({ type: 'USER_LOGIN_SUCCESS', user: data });
        } catch (error) {
            dispatch({ type: 'USER_LOGIN_FAILURE', error: error.message });
        }
    }
}

export const userLogout = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'USER_LOGOUT_REQUEST' });
            await axios.get(`${API_URL}/auth/logout`);
            dispatch({ type: 'USER_LOGOUT_SUCCESS' });
        } catch (error) {
            dispatch({ type: 'USER_LOGOUT_FAILURE', error: error.message });
        }
    }
}

export const userRegister = ( email, password ) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'USER_REGISTER_REQUEST' });
            const { data } = await axios.post(`${API_URL}/auth/signup`, { email, password });
            dispatch({ type: 'USER_REGISTER_SUCCESS', user: data });
        } catch (error) {
            dispatch({ type: 'USER_REGISTER_FAILURE', error: error.message });
        }
    }
}

export const userUpdate = (  email, password  ) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'USER_UPDATE_REQUEST' });
            const { data } = await axios.post(`${API_URL}/auth/update`, { email, password });
            dispatch({ type: 'USER_UPDATE_SUCCESS', user: data });
        } catch (error) {
            dispatch({ type: 'USER_UPDATE_FAILURE', error: error.message });
        }
    }
}

export const userDelete = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'USER_DELETE_REQUEST' });
            await axios.delete(`${API_URL}/auth/delete`);
            dispatch({ type: 'USER_DELETE_SUCCESS' });
        } catch (error) {
            dispatch({ type: 'USER_DELETE_FAILURE', error: error.message });
        }
    }
}

// export const userGet = () => {
//     return async (dispatch) => {
//         try {
//             dispatch({ type: 'USER_GET_REQUEST' });
//             const config = {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'x-auth-token' : localStorage.getItem('xat')
//                 }
//             }
//             const { data } = await axios.get( `${API_URL}/auth/getuser`
//             ,config);
//             dispatch({ type: 'USER_GET_SUCCESS', user: data });
//         } catch (error) {
//             dispatch({ type: 'USER_GET_FAILURE', error: error.message });
//         }
//     }
// }

export const getUserFromToken = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'USER_FROM_TOKEN_REQUEST' });
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': localStorage.getItem('xat')
                }
            }
            const { data } = await axios.get(`${API_URL}/auth/getuser`, config);
            const userData = {
                name : data.name,
                isAdmin : data.isAdmin,
                token : localStorage.getItem('xat')
            }
            dispatch({ type: 'USER_FROM_TOKEN_SUCCESS', user: userData });
        } catch (error) {
            dispatch({ type: 'USER_FROM_TOKEN_FAILURE', error: error.message });
        }
    }
}

export const userGetAll = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'USER_GET_ALL_REQUEST' });
            const { data } = await axios.get(`${API_URL}/auth/getAll`);
            dispatch({ type: 'USER_GET_ALL_SUCCESS', users: data });
        } catch (error) {
            dispatch({ type: 'USER_GET_ALL_FAILURE', error: error.message });
        }
    }
}

export const userGetAllAdmin = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'USER_GET_ALL_ADMIN_REQUEST' });
            const { data } = await axios.get(`${API_URL}/auth/getAllAdmin`);
            dispatch({ type: 'USER_GET_ALL_ADMIN_SUCCESS', users: data });
        } catch (error) {
            dispatch({ type: 'USER_GET_ALL_ADMIN_FAILURE', error: error.message });
        }
    }
}

