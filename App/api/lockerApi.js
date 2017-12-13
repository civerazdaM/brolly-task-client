import callApi from '../util/callApi';

export function getPoliciesApi(token) {
  return callApi({
    url: 'http://localhost:3000/policies',
    headers: {token}
  });
}