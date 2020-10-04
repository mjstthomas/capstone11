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
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}api/users/`, {
      method: "POST",
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: user,
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
  getProfilesSearch(skill, skill2, skill3) {
    return fetch(
      `${process.env.REACT_APP_API_URL}api/profiles/${skill}/${skill2}/${skill3}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `bearer ${TokenService.getAuthToken()}`,
        },
      }
    ).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getUserProfiles(userId) {
    return fetch(
      `${process.env.REACT_APP_API_URL}api/profiles/user/${userId}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `bearer ${TokenService.getAuthToken()}`,
        },
      }
    ).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getFreelanceOffers() {
    return fetch(`${process.env.REACT_APP_API_URL}api/offers/dev`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    });
  },
  getBusinessOffers() {
    return fetch(`${process.env.REACT_APP_API_URL}api/offers/emp`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    });
  },
  acceptOffer(obj, offer_id) {
    return fetch(`${process.env.REACT_APP_API_URL}api/offers/${offer_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(obj),
    });
  },
  postOffer(obj) {
    return fetch(`${process.env.REACT_APP_API_URL}api/offers/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(obj),
    });
  },
};

export default ApiService;
