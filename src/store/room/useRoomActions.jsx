import {useCallback} from 'react';
import {useDispatch} from "react-redux";
import * as types from './roomTypes';
import axios from 'axios';

export const useRoomActions = () => {
    const dispatch = useDispatch();

    const getLocalData = useCallback(()=> {
        dispatch({type: types.GET_ROOMS_START})
        axios
            .get('http://localhost:3333/rooms')
            .then(res => {
                dispatch({type: types.GET_ROOMS_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({type: types.GET_ROOMS_FAILURE, payload: err.response})
            });
    }, [dispatch])

    return {getLocalData}
}
