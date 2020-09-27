import TokenService from "./TokenService";
import config from '../config';

const ApiService = {
    importUser(userId){

       return fetch(`${config.API_ENDPOINT}api/profiles/user/${userId}`,{
           method: 'GET',
           headers: {
               Authorization: `bearer ${TokenService.getAuthToken()}`,
           }
       })
    }
=======
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
