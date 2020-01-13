import axios from 'axios';

const API_URL = 'https://the-books-api-staging.enouvo.com';

export default function callApi(endpoint, method = 'GET', body, Token) {
  console.log('url', `${API_URL}${endpoint}`);
  console.log('body', body);
  console.log('token ', 'Bearer ' + Token);
  return axios({
    method: method,
    url: `${API_URL}${endpoint}`,
    data: body,
    headers: {
      Authorization: 'Bearer ' + Token,
      'Content-Type': 'application/json',
    },
  })
    .then(function(response) {
      console.log('response888888888 ', response);
      return response;
    })
    .catch(err => {
      throw err.response;
    });
}
