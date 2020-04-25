import authTypes from "./authTypes";
import {createReducer} from "../utils/createReducer";

const initialState = {
    key: null,
    isLoading: false,
    errors: null
};

const authStart = (state, payload) => ({...state, isLoading: true});

const authSuccess = (state, payload) => ({...state, isLoading: false, key: payload});

const authFailure = (state, payload) => ({...state, isLoading: false, errors: payload});

export default createReducer(initialState, {
    [authTypes.AUTH_LOGIN_START]: authStart,
    [authTypes.AUTH_LOGIN_SUCCESS]: authSuccess,
    [authTypes.AUTH_LOGIN_FAILURE]: authFailure,
    [authTypes.AUTH_REGISTER_START]: authStart,
    [authTypes.AUTH_REGISTER_SUCCESS]: authSuccess,
    [authTypes.AUTH_REGISTER_FAILURE]: authFailure
})
