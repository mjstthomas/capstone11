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
    return fetch(`${config.API_ENDPOINT}api/messages/myMessages`, {
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postMessage(message) {
    return fetch(`${config.API_ENDPOINT}api/messages/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(message),
    });
  },
  patchImage(imageUrl) {
    return fetch(`${config.API_ENDPOINT}api/images/`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({ imageLink: imageUrl }),
    }).then((res) => res.json());
  },
  addProfile(details) {
    return fetch(`${config.API_ENDPOINT}api/profiles/add`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(details),
    });
  },
  addFreelanceSkill(userID, name, level) {
    return fetch(`${config.API_ENDPOINT}api/skills/add/${userID}`, {
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
  postFreelanceWork(userID, work) {
    return fetch(`${config.API_ENDPOINT}api/profiles/${userID}/projects`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        details: work,
      }),
    });
  },
  deleteOffer(offerID) {
    return fetch(`${config.API_ENDPOINT}api/offers/${offerID}`, {
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
