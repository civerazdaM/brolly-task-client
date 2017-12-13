import { all } from 'redux-saga/effects';
import { loginSaga, loginFromStorageSaga, logoutFromStorageSaga } from './containers/LoginPage/loginSagas';
import { getPoliciesSaga } from './containers/LockerPage/lockerSagas';

export default function* rootSaga() {
    yield all([
        loginSaga(),
        loginFromStorageSaga(),
        getPoliciesSaga(),
        logoutFromStorageSaga(),
    ]);
}