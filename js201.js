'use strict';

var year = window.prompt('Enter year - is it a leap year?');

var leapOrNot = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0; 

var hundred = year % 100 !== 0;

console.log(leapOrNot); 