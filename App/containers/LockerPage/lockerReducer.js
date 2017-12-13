import { fromJS } from 'immutable';
import { GET_POLICIES_REQUEST, GET_POLICIES_SUCCESS, GET_POLICIES_FAILURE } from './lockerConstants';

const initialState = fromJS({
  policies: undefined,
  isGetPoliciesInProgress: false,
  isGetPoliciesFailed: false
});

function lockerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POLICIES_REQUEST:
      return state.withMutations((map) => {
        map.set('isGetPoliciesInProgress', true)
          .set('isGetPoliciesFailed', false)
          .set('policies', undefined);
      });
    case GET_POLICIES_SUCCESS:
      return state.withMutations((map) => {
        map.set('isGetPoliciesInProgress', false)
          .set('policies', fromJS(action.policies));
      });
    case GET_POLICIES_FAILURE:
      return state.withMutations((map) => {
        map.set('isGetPoliciesInProgress', false)
          .set('isGetPoliciesFailed', true);
      });
    default:
      return state;
  }
}

export default lockerReducer;