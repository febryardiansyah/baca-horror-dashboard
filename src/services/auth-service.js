import http from "./http"

export const login = async (email, password) => {
    try {
        const response = await http.post('user/login')

        return response.data;
    } catch (error) {
        throw error;
    }
}