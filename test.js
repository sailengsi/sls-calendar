const Calendar = require('./core');

const calendar = new Calendar({
    month: 9
});

console.log('calendar', calendar);
console.log(`当前 ${calendar.month}月 可遍历的数据结构`, calendar.getDates());

calendar.config({
    month: 11
});

console.log(`当前 ${calendar.month}月 可遍历的数据结构`, calendar.getDates());