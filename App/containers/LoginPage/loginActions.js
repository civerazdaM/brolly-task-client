import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_FROM_STORAGE_REQUEST,
    LOGIN_FROM_STORAGE_SUCCESS, LOGIN_FROM_STORAGE_FAILURE, LOGOUT_FROM_STORAGE_REQUEST, LOGOUT_FROM_STORAGE_SUCCESS,
    LOGOUT_FROM_STORAGE_FAILURE
} from './loginConstants';

export function loginRequest({username, password}) {
    return {
        type: LOGIN_REQUEST,
        username,
        password
    };
}

export function loginSuccess({token, username}) {
    return {
        type: LOGIN_SUCCESS,
        token,
        username,
    };
}

export function loginFailure() {
    return {
        type: LOGIN_FAILURE,
    };
}

export function loginFromStorageRequest() {
    return {
        type: LOGIN_FROM_STORAGE_REQUEST,
    };
}

export function loginFromStorageSuccess({token, username}) {
    return {
        type: LOGIN_FROM_STORAGE_SUCCESS,
        token,
        username,
    };
}

export function loginFromStorageFailure() {
    return {
        type: LOGIN_FROM_STORAGE_FAILURE,
    };
}

export function logoutFromStorageRequest() {
    return {
        type: LOGOUT_FROM_STORAGE_REQUEST,
    };
}

export function logoutFromStorageSuccess() {
    return {
        type: LOGOUT_FROM_STORAGE_SUCCESS,
    };
}

export function logoutFromStorageFailure() {
    return {
        type: LOGOUT_FROM_STORAGE_FAILURE,
    };
}