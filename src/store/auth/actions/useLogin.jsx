import {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {axiosWithoutAuth as axios} from "../../utils/axiosConfig";
import authTypes from "../authTypes";

export const useLogin = () => {
    const dispatch = useDispatch();

    const login = useCallback(credentials => {
        dispatch({type: authTypes.AUTH_LOGIN_START});
        axios().post('/api/api-token-auth/', credentials).then(res => {
            dispatch({type: authTypes.AUTH_LOGIN_SUCCESS, payload: res.data.token})
        }).catch(err => dispatch({type: authTypes.AUTH_LOGIN_FAILURE, payload: err.response}))
    }, [dispatch]);

    return [login]
};
