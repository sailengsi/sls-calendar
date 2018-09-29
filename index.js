function isLeap(year) {
    const _100 = year % 100 ===0;
    const _400 = year % 400 === 0;
    const _4 = year % 4 === 0;
    return _100 && _400 && _4 ? 1 : 0;
}

function getCurMonthFirstDay(year, month) {
    let date = null;
    if (year && month) {
        date = new Date(`${year}-${month}-1`);
    } else {
        date =  new Date();
    }
    return date.getDay();
}

// 十二个月的天数
const allMontCountDay = [31, 31, 28 + isLeap(2018), 31, 30, 31, 30, 31, 31, 30, 31, 30];


const year = 2018;
const month = 4;


const isYearLeap = isLeap(year); // 是否是闰年
const firstDay = getCurMonthFirstDay(year, month); // 获取当月的第一天是周几
const mountAdd = firstDay === 0 ? 7: firstDay; // 算行数时，如果是周末，返回的是0，要转换为7
const curMonthDays = allMontCountDay[month]; // 当月总天数

const rowCount = Math.ceil( (curMonthDays + mountAdd) / 7 ); // 当月按周排列表，最多可排的 行 数


function getData() {
    const days = [];

    for (let r = 0; r < rowCount; r++) {
        let weeks = [];
        for (let c = 0; c < 7; c++) {
            let v = r * 7 + c - mountAdd + 2;
            if (v > 0 && v <= curMonthDays) {
                let temp = {
                    day: v
                };
                if (c > 4) {
                    temp.rest = c + 1;
                }
                weeks[c] = temp;
            } else {
                // weeks[c] = 0;
            }
        }
        days[r] = weeks;
    }

    return days;
}


const days = getData(); // 需要遍历的最终数据


console.log(`当前  ${year}年 ${isYearLeap === 1 ? '润' : '平'}年`);
console.log(`当前 ${month}月 的第一天是  周${firstDay}`);
console.log(`当前 ${month}月 有 ${curMonthDays} 天`);
console.log(`当前月按周列表，应该排 ${rowCount} 行`);
console.log(`当前月可遍历的数据结构`, days);
