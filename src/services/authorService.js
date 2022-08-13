import http from "./http"

export default {
    getAll: async () => {
        try {
            const response = await http.get('author/all')

            return Promise.resolve(response.data)
        } catch (error) {
            return Promise.reject(error)
        }
    },
    createAuthor: async (data) => {
        try {
            const response = await http.post('author/create',data)

            return Promise.resolve(response.data)
        } catch (error) {
            return Promise.reject(error.response.data || error)
        }
    }
}