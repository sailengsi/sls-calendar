module.exports = class Calendar {

    constructor(opts = {}) {
        this.D = new Date();
        this.year = opts.year || this.D.getFullYear();
        this.month = opts.month || this.D.getMonth();
        this.date = opts.date || this.D.getDate();
        this.allMonthCountDays = [
            31, // 12 月
            31, // 1 月
            28 + (this.isLeapYear(this.year) ? 1 : 0), // 2 月，如果是闰年需加一天
            31, // 3 月
            30, // 4 月
            31, // 5 月
            30, // 6 月
            31, // 7 月
            31, // 8 月
            30, // 9 月
            31, // 10 月
            30 // 11 月
        ];
        this.updateData();
    }


    /**
     * 更新年月日，重新实例化
     * @param year
     * @param month
     * @param date
     */
    config({year, month, date} = {}) {
        if (year) {
            this.year = year;
        }
        if (month) {
            this.month = month;
        }
        if (date) {
            this.date = date;
        }
        this.date_str = `${this.year}-${this.month}-${this.date}`;
        this.D = new Date(this.date_str);
        this.updateData();
    }


    /**
     * 更新当前日期的各种所需数据
     */
    updateData() {
        this.curMonthCountDays = this.allMonthCountDays[this.month]; // 当前月总天数
        this.firstDay = this.getCurWeekByDate(); // 获取当月的第一天是周几
        this.mountDayAdd = this.firstDay === 0 ? 7: this.firstDay; // 算行数时，如果是周末，返回的是0，要转换为7
        this.curMonthCountWeeks = Math.ceil( (this.curMonthCountDays + this.mountDayAdd) / 7 ); // 获取当前月的周数
    }

    /**
     * 检测是否是闰年
     * @param year  需要检测的年份，不传取初始化时的年
     * @returns {boolean} 是：true 否：false
     */
    isLeapYear(year) {
        const y = year || this.year;
        return y % 100 === 0 && y % 400 === 0 && y && 4 === 0;
    }


    /**
     * 获取当月的第一天是周几
     * @returns {number}
     */
    getCurWeekByDate() {
        return this.D.getDay();
    }


    /**
     * 获取指定月份周期数据
     * @returns {Array} 最终组成的基础数据格式
     * @example [ [ {day: 日期, rest: 6 || 7} ], []... ] 日期仅是 号  ，rest代表周六周日，6:周六;7:周末
     */
    getDates() {
        const countDays = this.curMonthCountDays;
        const countWeeks = this.curMonthCountWeeks;

        const days = [];
        const allDays = [];

        for (let r = 0; r < countWeeks; r++) {
            let weeks = [];
            for (let c = 0; c < 7; c++) {
                let v = r * 7 + c - this.mountDayAdd + 2;
                if (v > 0 && v <= countDays) {
                    let temp = {
                        day: v
                    };
                    if (c > 4) {
                        temp.rest = c + 1;
                    }
                    weeks[c] = temp;
                    allDays.push(temp);
                } else {
                    // weeks[c] = 0;
                }
            }
            days[r] = weeks;
        }

        return {
            days,
            allDays,
        };
    }
};