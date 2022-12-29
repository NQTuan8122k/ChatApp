import moment from 'moment';

const DAY_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const formatTimeMessage = string => {
  let time = moment(string).fromNow();
  let month = moment(string).month();
  let date = moment(string).date();
  let hour = moment(string).hour();
  let minute = moment(string).minutes();
  if (minute < 10) {
    minute = '0' + minute;
  }

  let formatHour = parseInt(hour) % 12;
  if (time == 'a day ago') {
    return {time: ' ' + DAY_OF_WEEK[0], len: 33};
  } else if (time?.includes('days ago')) {
    return {time: ' ' + DAY_OF_WEEK[time.charAt(0)], len: 33};
  } else if (
    time?.includes('hour') ||
    time?.includes('second') ||
    time?.includes('minute')
  ) {
    if (parseInt(hour) < 13) {
      return {
        time: ' ' + formatHour.toString() + ':' + minute + ' AM',
        len: 58,
      };
    } else {
      return {
        time: ' ' + formatHour.toString() + ':' + minute + ' PM',
        len: 58,
      };
    }
  } else {
    return {time: ' ' + date + ' ' + MONTHS[month - 1].slice(0, 3), len: 48};
  }
};
export default formatTimeMessage;
