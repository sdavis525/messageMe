const showCorrectDate = date => {
    let showDate = date.toString();

 
    const endCharacter = showDate.charAt(showDate.length - 1);

    if (endCharacter === '1' && showDate !== '11') {
        showDate = `${showDate}st`;
    } else if (endCharacter === '2' && showDate !== '12') {
        showDate = `${showDate}nd`;
    } else if (endCharacter === '3' && showDate !== '13') {
        showDate = `${showDate}rd`;
    } else {
        showDate = `${showDate}th`;
    }

    return showDate;
};


module.exports = (
    timestamp,
    { monthLength = 'short', dateTime = true } = {}
) => {
    let months;

    if (monthLength === 'short') {
        months = {
            0: 'Jan',
            1: 'Feb',
            2: 'Mar',
            3: 'Apr',
            4: 'May',
            5: 'Jun',
            6: 'Jul',
            7: 'Aug',
            8: 'Sep',
            9: 'Oct',
            10: 'Nov',
            11: 'Dec'
        };
    } else {
        months = {
            0: 'January',
            1: 'February',
            2: 'March',
            3: 'April',
            4: 'May',
            5: 'June',
            6: 'July',
            7: 'August',
            8: 'September',
            9: 'October',
            10: 'November',
            11: 'December'
        };
    }

    const dateObject = new Date(timestamp);
    const timeOfMonth = months[dateObject.getMonth()];

    let dayOfMonth;

    if (dateTime) {
        dayOfMonth = showCorrectDate(dateObject.getDate());
    } else {
        dayOfMonth = dateObject.getDate();
    }

    const year = dateObject.getFullYear();

    let hour;
 
    if (dateObject.getHours > 12) {
        hour = Math.floor(dateObject.getHours() / 2);
    } else {
        hour = dateObject.getHours();
    }
  
    if (hour === 0) {
        hour = 12;
    }

    const minutes = dateObject.getMinutes();

  
    let timeOfDay;

    if (dateObject.getHours() >= 12) {
        timeOfDay = 'pm';
    } else {
        timeOfDay = 'am';
    }

    const currentTimeStamp = `${timeOfMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${timeOfDay}`;

    return currentTimeStamp;
};