import { useSelector } from "react-redux";
import { saveToken, saveUser, storageRemoveAll } from "../helpers/storage";
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
    isLogin: () => {
        const user = useSelector(state => state.base.user)

        return user !== null;
    },
    logout: () => {
        storageRemoveAll()
    }

}