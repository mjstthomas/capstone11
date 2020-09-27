import TokenService from "./TokenService";

const AuthApiService = {
  postLogin(credentials) {
    return fetch(`${process.env.REACT_APP_API_ENDPOINT}api/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postRefresh() {
    return fetch(`${process.env.REACT_APP_API_ENDPOINT}api/auth/refresh`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postUser(user) {
    return fetch(`${process.env.REACT_APP_API_ENDPOINT}api/users/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  },
};

export default AuthApiService;
