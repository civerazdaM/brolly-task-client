import { takeLatest, put, call } from 'redux-saga/effects';
import { GET_POLICIES_REQUEST } from './lockerConstants';
import { getPoliciesSuccess, getPoliciesFailure } from './lockerActions';
import { getPoliciesApi } from '../../api/lockerApi';

export function* getPoliciesSaga() {
  yield takeLatest(GET_POLICIES_REQUEST, getPolicies);
}

function* getPolicies({token}) {
  try {
    let policies = yield call(getPoliciesApi, token);
    yield put(getPoliciesSuccess(policies));
  } catch(e) {
    //eslint-disable-next-line
    console.warn('getPolicies fetch failed, please try again ...', e);
    yield put(getPoliciesFailure());
  }
}