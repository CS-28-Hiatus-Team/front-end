import {combineReducers} from "redux";
import auth from './auth/authReducer';
import room from './room/roomReducer'

export default combineReducers({auth, room});
