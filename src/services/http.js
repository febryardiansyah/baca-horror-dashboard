import axios from "axios";
import { useNavigate } from "react-router-dom";
import constants from "../helpers/constants";
import { readToken, storageRemoveAll } from "../helpers/storage";

const baseURL = constants.API.baseUrl

const http = axios.create({ baseURL })

http.interceptors.request.use((value) => {
    const token = readToken()
    if (token) {
        value.headers.Authorization = `Bearer ${token}`
    }

    return value
})

http.interceptors.response.use(
    response => response,
    err => {
        if (err.response.status === 401) {
            const navigate = useNavigate()
            storageRemoveAll()
            navigate(constants.ROUTE.login, { replace: true, })
        }
        return Promise.reject(err)
    }
)

export default http