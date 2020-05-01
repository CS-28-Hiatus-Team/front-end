import * as types from './gameTypes';
import {createReducer} from "../utils/createReducer";

const initialState = {
    currentRoom: {},
    isLoading: false,
    errors: null
};


const gameStart = state => ({...state, isLoading: true, errors: null});
const currentRoomSuccess = (state, payload) => ({...state, isLoading: false, currentRoom: payload})
const gameFailure = (state, payload) => ({...state, isLoading: false, errors: payload});

export default createReducer(initialState, {
    [types.INITIALIZE_PLAYER_START]: gameStart,
    [types.INITIALIZE_PLAYER_SUCCESS]: currentRoomSuccess,
    [types.INITIALIZE_PLAYER_FAILURE]: gameFailure,
    [types.MOVE_PLAYER_START]: gameStart,
    [types.MOVE_PLAYER_SUCCESS]: currentRoomSuccess,
    [types.MOVE_PLAYER_FAILURE]: gameFailure
})
