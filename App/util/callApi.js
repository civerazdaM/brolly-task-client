export default function ({ url, method = 'GET', body, headers }) {
    let defaultHeaders = {"Content-Type": "application/json"};
    headers = Object.assign({}, defaultHeaders, headers);
    return fetch(url, {
        headers,
        method,
        body: JSON.stringify(body)
    })
        .then((resp) => resp.json())
        .then(function(data) {
            return data;
        });
}