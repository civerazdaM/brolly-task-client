import { takeLatest, call, put } from 'redux-saga/effects';
import {
    LOGIN_FROM_STORAGE_REQUEST, LOGIN_REQUEST, LOGOUT_FROM_STORAGE_REQUEST, TOKEN,
    USERNAME
} from './loginConstants';
import {
    loginSuccess, loginFailure, loginFromStorageSuccess, loginFromStorageFailure,
    logoutFromStorageSuccess, logoutFromStorageFailure
} from './loginActions';
import { loginApi } from '../../api/loginApi';
import {getItemFromAsyncStore, removeItemFromAsyncStorage, storeItemInAsyncStorage} from "../../api/asyncStorage";

export function* loginSaga() {
  yield takeLatest(LOGIN_REQUEST, login);
}

function* login({username, password}) {
  try {
    let data = yield call(loginApi, {username, password});
    yield call(storeItemInAsyncStorage, TOKEN, data.token);
    yield call(storeItemInAsyncStorage, USERNAME, username);
    yield put(loginSuccess({token: data.token, username}));
  } catch(e) {
    //eslint-disable-next-line
    console.warn('login fetch failed, please try again ...', e.message);
    yield put(loginFailure());
  }
}

export function* loginFromStorageSaga() {
    yield takeLatest(LOGIN_FROM_STORAGE_REQUEST, loginFromStorage);
}

function* loginFromStorage() {
    try {
        let token = yield call(getItemFromAsyncStore, TOKEN);
        let username = yield call(getItemFromAsyncStore, USERNAME);
        yield put(loginFromStorageSuccess({token, username}));
    } catch(e) {
        //eslint-disable-next-line
        console.warn('login fetch failed, please try again ...', e.message);
        yield put(loginFromStorageFailure());
    }
}

export function* logoutFromStorageSaga() {
    yield takeLatest(LOGOUT_FROM_STORAGE_REQUEST, logoutFromStorage);
}

function* logoutFromStorage() {
    try {
        yield call(removeItemFromAsyncStorage, TOKEN);
        yield call(removeItemFromAsyncStorage, USERNAME);
        yield put(logoutFromStorageSuccess());
    } catch(e) {
        //eslint-disable-next-line
        console.warn('login fetch failed, please try again ...', e.message);
        yield put(logoutFromStorageFailure());
    }
}