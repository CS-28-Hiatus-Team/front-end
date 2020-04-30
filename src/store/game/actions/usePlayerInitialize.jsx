import {useCallback} from 'react';
import {useDispatch} from "react-redux";
import * as types from '../gameTypes';
import {axiosWithAuth as axios} from "../../utils/axiosConfig";

export const usePlayerInitialize = () => {
    const dispatch = useDispatch();

    const init = useCallback(token => {
        dispatch({type: types.INITIALIZE_PLAYER_START});
        axios(token)
            .get('/api/adv/init/')
            .then(res => dispatch({type: types.INITIALIZE_PLAYER_SUCCESS, payload: res.data}))
            .catch(err => dispatch({type: types.INITIALIZE_PLAYER_FAILURE, payload: err.response}))
    }, [dispatch])

    return [init]
}