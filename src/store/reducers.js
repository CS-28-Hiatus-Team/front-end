import {combineReducers} from "redux";
import auth from './auth/authReducer';
import game from './game/gameReducer'

export default combineReducers({auth, game});
