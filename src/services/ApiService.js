import TokenService from "./TokenService";

const ApiService = {
  getMessages() {
    return fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/api/messages/myMessages`,
      {
        headers: {
          "content-type": "application/json",
          Authorization: `bearer ${TokenService.getAuthToken()}`,
        },
      }
    ).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default ApiService;
