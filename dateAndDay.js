let timezone_offset = require('./app')

let event = new Date()

var dateAndDay = event.toLocaleTimeString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    timeZone: timezone_offset
});

/* CALCULATION FOR WEEKDAYS */
var dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var dayIndex = [];
let newArray = [];

let i=0
let weekday='';
let date = '';

while (dateAndDay[i] !== ',') {
    weekday += dateAndDay[i];
    ++i;
}

while (dateAndDay[i+2] !== ',') {
    date += dateAndDay[i+2];
    ++i;
}

for (i=0; i<dayArray.length; ++i) {
    if(dayArray[i] === weekday) {
        break;
    }
}

var index = i;
// console.log(index);
while (dayIndex.length < 7 && index < 7) {
    if(index < 7) {
        dayIndex.push(index);
    }
    ++index;
}

if(dayIndex.length < 8) {
    var num = 0;
    while (num < i) {
        dayIndex.push(num);
        ++num;
    }
}

// console.log(dayIndex);

for (let j = 0; j < dayArray.length; j++) {
    newArray.push(dayArray[dayIndex[j]]);
}

// console.log(newArray);

// module.exports = { newArray, timeArray };
module.exports = newArray;