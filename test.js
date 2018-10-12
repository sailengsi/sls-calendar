const Calendar = require('./index');

const calendar = new Calendar({
    month: 9
});

// console.log('calendar', calendar);
console.log(`当前 ${calendar.month}月 可遍历的数据结构`, calendar.getDates().days);

// console.log(`当前 ${calendar.month}月 需补上个月数据：`, calendar.repairPrev(6));
// console.log(`当前 ${calendar.month}月 需补下个月数据：`, calendar.repairNext(3));


calendar.config({
    month: 7
});

console.log(`当前 ${calendar.month}月 可遍历的数据结构`, calendar.getDates().days);
