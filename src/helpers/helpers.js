import constants from "./constants"

export default {
    routePathByIndex: (index) => {
        switch (index) {
            case '0': {
                return constants.ROUTE.story
            }
            case '1': {
                return constants.ROUTE.author
            }
            case '2': {
                return constants.ROUTE.user
            }
            case '3': {
                return constants.ROUTE.comment
            }
            default: {
                return 'story'
            }
        }
    }
}