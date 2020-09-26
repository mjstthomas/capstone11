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
};

export default ApiService;
