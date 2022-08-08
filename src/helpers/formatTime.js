import moment from 'moment';
import 'moment/locale/id';

const formatTime = (dateTime) => {
    moment.locale('id')
    const formatedDate = moment(dateTime).format('LLL')

    return formatedDate
}

export default formatTime