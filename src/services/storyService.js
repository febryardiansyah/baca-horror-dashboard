import http from "./http"

export default {
    getAllStory: async (page = 1) => {
        try {
            const response = await http.get('story/all',{
                params: {
                    page: page,
                    limit: 10,
                }
            })

            return response.data
        } catch (error) {
            Promise.reject(error)
        }
    }
}