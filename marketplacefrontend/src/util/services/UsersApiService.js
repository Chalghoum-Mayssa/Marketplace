import BaseApiService from "./BaseApiService";
import axios from "axios";
import {apiUrl} from "../../configs/site.config";

class UsersApiService extends BaseApiService {

  constructor() {
    super('user');
  }

  SignIn(credentials) {
    return axios.create().post(apiUrl + "/user/SignIn", credentials);
  }

}


const usersApiService = new UsersApiService();

export default usersApiService;
