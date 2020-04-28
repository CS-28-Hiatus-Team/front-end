import {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {axiosWithoutAuth as axios} from "../../utils/axiosConfig";
import authTypes from "../authTypes";

export const useRegister = () => {
    const dispatch = useDispatch();

    const register = useCallback(credentials => {
        dispatch({type: authTypes.AUTH_REGISTER_START});
        axios().post('/api/registration/', credentials).then(res => {
            console.log(res.data);
            dispatch({type: authTypes.AUTH_REGISTER_SUCCESS, payload: res.data.key})
        }).catch(err => dispatch({type: authTypes.AUTH_REGISTER_FAILURE, payload: err.response}))
    }, [dispatch]);

    return [register]
};
