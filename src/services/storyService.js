import http from "./http"

export default {
    getAllStory: async (page = 1, keyword) => {
        try {
            const response = await http.get('story/all', {
                params: {
                    page: page,
                    limit: 10,
                    title: keyword
                }
            })

            return response.data
        } catch (error) {
            Promise.reject(error)
        }
    }
}