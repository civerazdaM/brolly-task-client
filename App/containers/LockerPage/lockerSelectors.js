import { createSelector } from 'reselect';

const selectLocker = (state) => state.get('locker');

const makeSelectIsGetPoliciesInProgress = () => createSelector(
  selectLocker,
  (lockerState) => lockerState.get('isGetPoliciesInProgress')
);

const makeSelectIsGetPoliciesFailed = () => createSelector(
  selectLocker,
  (lockerState) => lockerState.get('isGetPoliciesFailed')
);

const makeSelectGetPolicies = () => createSelector(
  selectLocker,
  (lockerState) => lockerState.get('policies')
);

export {
  selectLocker,
  makeSelectIsGetPoliciesInProgress,
  makeSelectIsGetPoliciesFailed,
  makeSelectGetPolicies,
}