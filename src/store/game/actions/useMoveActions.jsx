import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {axiosWithAuth as axios} from "../../utils/axiosConfig";
import * as types from '../gameTypes';

export const useMoves = () => {
    const dispatch = useDispatch();


    /**
     *  Move Action for Player Movemnt
     *  @param String token --- Authentication Token, located in the store at state.auth.token
     *  @param String direction --- One letter direction movement, 'n', 's', 'e', 'w'
     */
    const move = useCallback((token, direction) => {
        dispatch({type: types.MOVE_PLAYER_START});
        axios(token)
            .post('/api/adv/move', {direction})
            .then(res => {
                dispatch({type: types.MOVE_PLAYER_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({type: types.MOVE_PLAYER_FAILURE, payload: err.response})
            });
    }, [dispatch])

    return [move]
}