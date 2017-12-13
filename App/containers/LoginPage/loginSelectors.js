import { createSelector } from 'reselect';

const selectLogin = (state) => state.get('login');

const makeSelectIsLoginInProgress = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('isLoginInProgress')
);

const makeSelectIsLoginFailed = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('isLoginFailed')
);

const makeSelectToken = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('token')
);

const makeSelectIsLoginFromStorageInProgress = () => createSelector(
    selectLogin,
    (loginState) => loginState.get('isLoginFromStorageInProgress')
);

const makeSelectIsLoginFromStorageFailed = () => createSelector(
    selectLogin,
    (loginState) => loginState.get('isLoginFromStorageFailed')
);

const makeSelectUsername = () => createSelector(
    selectLogin,
    (loginState) => loginState.get('username')
);

const makeSelectIsAuthenticated = () => createSelector(
    selectLogin,
    (loginState) => loginState.get('isAuthenticated')
);

export {
  selectLogin,
  makeSelectIsLoginInProgress,
  makeSelectIsLoginFailed,
  makeSelectToken,
  makeSelectUsername,
  makeSelectIsAuthenticated,
}