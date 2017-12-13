import { fromJS } from 'immutable';
import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_FROM_STORAGE_REQUEST,
    LOGIN_FROM_STORAGE_SUCCESS, LOGIN_FROM_STORAGE_FAILURE, LOGOUT_FROM_STORAGE_SUCCESS
} from './loginConstants';

const initialState = fromJS({
  token: undefined,
  username: undefined,
  isLoginInProgress: false,
  isLoginFailed: false,
  isAuthenticated: false,
  isLoginFromStorageInProgress: false,
  isLoginFromStorageFailed: false,
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state.withMutations((map) => {
        map.set('isLoginInProgress', true)
          .set('isLoginFailed', false)
          .set('token', undefined);
      });
    case LOGIN_SUCCESS:
      return state.withMutations((map) => {
        map.set('isLoginInProgress', false)
            .set('isAuthenticated', true)
            .set('token', fromJS(action.token))
            .set('username', fromJS(action.username));
      });
    case LOGIN_FAILURE:
      return state.withMutations((map) => {
        map.set('isLoginInProgress', false)
          .set('isLoginFailed', true);
      });
    case LOGIN_FROM_STORAGE_REQUEST:
        return state.withMutations((map) => {
            map.set('isLoginFromStorageInProgress', true)
                .set('isLoginFromStorageFailed', false)
                .set('isAuthenticated', false)
                .set('token', undefined)
                .set('username', undefined);
        });
    case LOGIN_FROM_STORAGE_SUCCESS:
        return state.withMutations((map) => {
            if(!action.token || !action.username) {
                map.set('isLoginFromStorageInProgress', false)
                    .set('isAuthenticated', false);
            } else {
                map.set('isLoginFromStorageInProgress', false)
                    .set('isAuthenticated', true)
                    .set('token', fromJS(action.token))
                    .set('username', fromJS(action.username));
            }
        });
    case LOGIN_FROM_STORAGE_FAILURE:
        return state.withMutations((map) => {
            map.set('isLoginFromStorageInProgress', false)
                .set('isLoginFromStorageFailed', true);
        });
    case LOGOUT_FROM_STORAGE_SUCCESS:
      return state.withMutations((map) => {
          map.set('isAuthenticated', false)
              .set('token', undefined)
              .set('username', undefined);
    });
    default:
      return state;
  }
}

export default loginReducer;