const isDev = process.env.NODE_ENV === 'development'

export default {
    API: {
        baseUrl: isDev ? process.env.REACT_APP_API_URL_DEV : process.env.REACT_APP_API_URL_PROD
        // baseUrl: process.env.REACT_APP_API_URL_PROD
    },
    ROUTE: {
        login: '/login',
        dashboard: '/dashboard',
        story: 'story',
        author: 'author',
        user: 'user',
        comment: 'comment'
    }
}