const moment = require('moment');

var createdAt = 1234;
var date = moment(createdAt);  // current date/time

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

// console.log(date.format('MMM Do, YYYY'));
// console.log(date.format('h:mm a'));
