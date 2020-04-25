import {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {axiosWithoutAuth as axios} from "../../utils/axiosConfig";
import authTypes from "../authTypes";

export const useLogin = () => {
    const dispatch = useDispatch();

    const login = useCallback(credentials => {
        dispatch({type: authTypes.AUTH_LOGIN_START});
        axios().post('/api/login', credentials).then(res => {
            console.log(res.data);
            dispatch({type: authTypes.AUTH_LOGIN_SUCCESS, payload: res.data.key})
        }).catch(err => dispatch({type: authTypes.AUTH_LOGIN_FAILURE, payload: err.response}))
    }, [dispatch]);

    return [login]
};
