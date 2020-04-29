import {createReducer} from "../utils/createReducer";
import * as types from './userTypes';

const initialState = {
    user: {},
    isLoading: false,
    errors: null
}

const userStart = state => ({...state, isLoading: true, errors: null, user: {}});
const userSuccess = (state, payload) => ({...state, isLoading: false, errors: null, user: payload});
const userFailure = (state, payload) => ({...state, isLoading: false, errors: payload, user: {}});

export default createReducer(initialState, {
    [types.FETCH_USER_START]: userStart,
    [types.FETCH_USER_SUCCESS]: userSuccess,
    [types.FETCH_USER_FAILURE]: userFailure
})