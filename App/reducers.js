import { combineReducers } from 'redux-immutable';
import login from './containers/LoginPage/loginReducer';
import locker from './containers/LockerPage/lockerReducer';

const rootReducer = combineReducers({
    login,
    locker,
});

export default rootReducer;