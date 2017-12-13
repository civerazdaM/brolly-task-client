import callApi from '../util/callApi';

export function loginApi({username, password}) {
  return callApi({
    url: 'http://localhost:3000/login',
    method: 'POST',
    body: {
      username,
      password,
    }
  });
}