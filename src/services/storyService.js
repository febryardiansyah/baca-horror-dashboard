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

            return Promise.resolve(response.data)
        } catch (error) {
            return Promise.reject(error.response.data || error)
        }
    },
    createNewStory: async (title, url, id) => {
        try {
            const response = await http.post('story/create', {
                title, url, author_id: id
            })

            return Promise.resolve(response.data)
        } catch (error) {
            return Promise.reject(error.response.data || error)
        }
    },
    deleteStoryById: async (id) => {
        try {
            const response = await http.delete(`story/delete/${id}`)

            return Promise.resolve(response.data)
        } catch (error) {
            return Promise.reject(error.response.data || error)
        }
    },
    getStoryById: async (id) => {
        try {
            const response = await http.get(`story/${id}`)

            return Promise.resolve(response.data)
        } catch (error) {
            return Promise.reject(error.response.data || error)
        }
    },
    editStoryById: async (id, data) => {
        try {
            const response = await http.put(`story/edit/${id}`, data)
            return Promise.resolve(response.data)
        } catch (error) {
            return Promise.reject(error.response.data || error)
        }
    }
}