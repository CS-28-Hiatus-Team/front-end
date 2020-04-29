import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import types from '../authTypes'

export const useLogout = () => {
    const dispatch = useDispatch();

    const logout = useCallback(()=> dispatch({type: types.LOGOUT}), [dispatch])

    return [logout]
}