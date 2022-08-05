import axios from "axios";
import constants from "../helpers/constants";

const baseURL = constants.API.baseUrl

const http = axios.create({ baseURL })

export default http