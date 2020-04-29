import authTypes from "./authTypes";
import {createReducer} from "../utils/createReducer";

const initialState = {
    token: null,
    isLoading: false,
    errors: null
};

const authStart = (state, payload) => ({...state, isLoading: true, errors: null});

const authSuccess = (state, payload) => ({...state, isLoading: false, token: payload, errors: null});

const authFailure = (state, payload) => ({...state, isLoading: false, errors: payload});

export default createReducer(initialState, {
    [authTypes.AUTH_LOGIN_START]: authStart,
    [authTypes.AUTH_LOGIN_SUCCESS]: authSuccess,
    [authTypes.AUTH_LOGIN_FAILURE]: authFailure,
    [authTypes.AUTH_REGISTER_START]: authStart,
    [authTypes.AUTH_REGISTER_SUCCESS]: authSuccess,
    [authTypes.AUTH_REGISTER_FAILURE]: authFailure
})
