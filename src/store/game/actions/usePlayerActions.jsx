import {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {axiosWithAuth as axios} from "../../utils/axiosConfig";
import * as types from '../gameTypes'

export const usePlayerActions = () => {
    const dispatch = useDispatch();

    const getPlayers = useCallback(token => {
        dispatch({type: types.GET_PLAYERS_START})
        axios(token)
            .get('/api/players')
            .then(res => {
                dispatch({type: types.GET_PLAYERS_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({type: types.GET_PLAYERS_FAILURE, payload: err.response})
            })
    }, [dispatch])

    return [getPlayers]
}