import * as types from './roomTypes';
import {createReducer} from "../utils/createReducer";

const initialState = {
    rooms: [],
    isLoading: false,
    errors: null
};

export const roomStart = (state, payload) => ({...state, isLoading: true, errors: null});
export const roomSuccess = (state, payload) => ({...state, isLoading: false, rooms: payload});
export const roomFailure = (state, payload) => ({...state, isLoading: false, errors: payload});

export default createReducer(initialState, {
    [types.GET_ROOMS_START]: roomStart,
    [types.GET_ROOMS_SUCCESS]: roomSuccess,
    [types.GET_ROOMS_FAILURE]: roomFailure
})
