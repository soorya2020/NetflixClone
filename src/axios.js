import axios from 'axios'
import { baseUrl } from "./constatns/constants";


const instance = axios.create({
    baseURL: baseUrl

  });

export default instance