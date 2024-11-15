import BaseApiService from "./BaseApiService";
import axios from "axios";
import {apiUrl} from "../../configs/site.config";
class ProductsApiService extends BaseApiService {

  constructor() {
    super('product');
  }

  createProduct(data) {
    return axios.create().post(apiUrl + "/products/CreateProduct", data);
  }

}


const productsApiService = new ProductsApiService();

export default productsApiService;