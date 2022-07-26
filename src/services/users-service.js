import axios from 'axios';

async function registerationUser(username, email, password) {
  return axios({
    method: 'post',
    url: '/api/v1/games/registration',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      username: username,
      email: email,
      password: password,
      returnSecureToken: true,
    }),
  });
}
async function authorisationUser(email, password) {
  return axios({
    method: 'post',
    url: '/api/v1/games/authorisation',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
  });
}
async function sendEmail(email) {
  return axios({
    method: 'post',
    url: '/api/v1/games/email',
    data: {
      email: email,
    },
  });
}
async function sendPass(oobCode, password) {
  return axios({
    method: 'post',
    url: '/api/v1/games/password',
    data: {
      oobCode,
      password,
    },
  });
}
async function updateUser(username, idToken, password) {
  return axios({
    method: 'post',
    url: '/api/v1/games/update',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      username,
      idToken,
      password,
      returnSecureToken: false,
    }),
  });
}

export {
  registerationUser,
  authorisationUser,
  sendEmail,
  sendPass,
  updateUser,
};
