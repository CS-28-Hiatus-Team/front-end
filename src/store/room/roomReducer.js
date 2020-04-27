import * as types from './roomTypes';
import {createReducer} from "../utils/createReducer";
import {findRoom, Room, RoomMap} from "../../utils/rooms";

const initialState = {
    rooms: [],
    roomMap: [],
    isLoading: false,
    errors: null
};

const setRooms = (rooms) => {
    return rooms.map(room => new Room(room.name, room.desc))
}

const setRoomMap = async (rooms) => {
    const roomSet = await setRooms(rooms)
    return rooms.map((room, id) => {
        const north = findRoom(roomSet, room.north);
        const south = findRoom(roomSet, room.south);
        const east = findRoom(roomSet, room.east);
        const west = findRoom(roomSet, room.west);
        return new RoomMap(room, north, south, east, west)
    });
}

export const roomStart = (state, payload) => ({...state, isLoading: true, errors: null});
export const roomSuccess = (state, payload) => ({...state, isLoading: false, rooms: setRooms(payload), roomMap: setRoomMap(payload)});
export const roomFailure = (state, payload) => ({...state, isLoading: false, errors: payload});

export default createReducer(initialState, {
    [types.GET_ROOMS_START]: roomStart,
    [types.GET_ROOMS_SUCCESS]: roomSuccess,
    [types.GET_ROOMS_FAILURE]: roomFailure
})
