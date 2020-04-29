import {combineReducers} from "redux";
import auth from './auth/authReducer';
import game from './game/gameReducer'
import user from './user/userReducer'

export default combineReducers({auth, game, user});
