import { GET_POLICIES_REQUEST, GET_POLICIES_SUCCESS, GET_POLICIES_FAILURE } from './lockerConstants';

export function getPoliciesRequest(token) {
  return {
    type: GET_POLICIES_REQUEST,
    token
  };
}

export function getPoliciesSuccess(policies) {
  return {
    type: GET_POLICIES_SUCCESS,
    policies
  };
}

export function getPoliciesFailure() {
  return {
    type: GET_POLICIES_FAILURE,
  };
}