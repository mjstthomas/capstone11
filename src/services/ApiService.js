import TokenService from "./TokenService";
import config from '../config';

const ApiService = {
    importUser(userId){
        console.log(TokenService.getAuthToken())
       return fetch(`${config.API_ENDPOINT}api/profiles/user/${userId}`,{
           method: 'GET',
           Authorization: `bearer ${TokenService.getAuthToken()}`,
       })
    }
};

export default ApiService;
