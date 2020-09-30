import TokenService from "./TokenService";
import config from "../config";

const ApiService = {
  importUser(userId) {
    return fetch(`${config.API_ENDPOINT}api/profiles/user/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    });
  },
  postUser(user){
      return fetch(`${config.API_ENDPOINT}api/users/`, {
        method: "POST",
        headers: {
          Authorization: `bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify(user),
    })
  },
  getMessages() {
    return fetch(`${process.env.REACT_APP_API_URL}api/messages/myMessages`, {
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postMessage(message) {
    return fetch(`${process.env.REACT_APP_API_URL}api/messages/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(message),
    });
  },
  getFreelanceOffers(){
      return fetch(`${process.env.REACT_APP_API_URL}api/offers/dev`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${TokenService.getAuthToken()}`,
        }
      })
  },
  getBusinessOffers(){
    return fetch(`${process.env.REACT_APP_API_URL}api/offers/emp`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      }
    })
}
};

export default ApiService;
