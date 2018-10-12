const Calendar = require('../core');

class Demo1 extends Calendar{
    setStartAndEnd(start, end) {
        const days = this.getDates().days;
        console.log(days[0]);
        console.log(this.year, this.month, this.date);
    }
};



const demo1 = new Demo1({
    month: 11
});

// console.log(`当前 ${demo1.month}月 可遍历的数据结构`, demo1.getDates().days);

demo1.setStartAndEnd(10, 20);
