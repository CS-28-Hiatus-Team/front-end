import {combineReducers} from "redux";
import auth from './auth/authReducer';
import game from './game/roomReducer'

export default combineReducers({auth, game});
