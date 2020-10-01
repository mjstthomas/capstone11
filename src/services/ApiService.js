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
  postImage(imageUrl) {
    return fetch(`${process.env.REACT_APP_API_URL}api/images/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(imageUrl),
    })
      .then((res) => res.json())
      .then((image) => {
        this.setState({
          uploading: false,
          image: image,
          error: "",
        });
      });
  },
  addProfile(blurb) {
    return fetch(`${process.env.REACT_APP_API_URL}api/profiles/add`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(blurb),
    });
  },
  addFreelanceSkill(userID, name, level) {
    return fetch(`${process.env.REACT_APP_API_URL}api/skills/add/${userID}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        user_id: userID,
        skill_name: name,
        skill_level: level,
      }),
    });
  },
  addFreelanceWork(userID, work) {
    return fetch(
      `${process.env.REACT_APP_API_URL}api/profiles/${userID}/projects`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify({
          details: work,
        }),
      }
    );
  },
  deleteOffer(offerID) {
    return fetch(`${process.env.REACT_APP_API_URL}api/offers/${offerID}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : null
    );
  },
};

export default ApiService;
