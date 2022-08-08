import http from "./http"

export default {
    getAll: async() => {
        try {
            const response = await http.get('author/all')

            return Promise.resolve(response.data)
        } catch (error) {
            Promise.reject(error)
        }        
    }
}