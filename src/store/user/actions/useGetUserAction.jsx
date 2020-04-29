import {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {axiosWithAuth as axios} from "../../utils/axiosConfig";
import * as types from '../userTypes'

export const useGetUserAction = () => {
    const dispatch = useDispatch();

    const getUser = useCallback(token => {
        dispatch({type: types.FETCH_USER_START});
        axios(token)
            .get('/api/auth/user')
            .then(res => {
                dispatch({type: types.FETCH_USER_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({type: types.FETCH_USER_FAILURE, payload: err.response})
            });
    }, [dispatch]);

    return [getUser]
}