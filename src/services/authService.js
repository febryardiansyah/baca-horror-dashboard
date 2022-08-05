import { readToken, readUser, saveToken, saveUser } from "../helpers/storage";
import http from "./http"

export default {
    login: async (login) => {
        try {
            const response = await http.post('user/login', login)
            const data = response.data
            saveUser(JSON.stringify(data.user))
            saveToken(data.token)
            return data;
        } catch (error) {
            throw error;
        }
    },
    isLogin: async () => {
        const user = readUser()
        const token = readToken()
        return user && token
    }

}