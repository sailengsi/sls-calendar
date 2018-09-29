# Calendar

> 此日历非彼日历，此日历纯输出数据，不涉及一点点UI，请知悉。


## Apis

### constructor(opts)

opts

```javascript
{
    year: '年',
    month: '月',
    day: '日'
}
```
> 默认初始化当前 `年` `月` `日`。


## Methods

### config(opts)

> 切换年月日，注意：之后再获取数据是基于此值获取的数据

```javascript
{
    year: '年',
    month: '月',
    day: '日'
}
```


### getDates

> 返回完整的当月数据，可拿来直接遍历

```javascript
{
    year: '',
    month: '',
    days: [
        // 第一周
        [
            day
        ],
        // 第二周
        [],
        // ...
        // 最后一周
        [
            day
        ]
    ]
}
```


- `year`当前数据所属年
- `month`当前数据所属月
- `days`中有几个元素，就代表有几周。
- `day`代表的是天，格式为`object`，如下：
```javascript
{
    day: '', // 日期号，界面上需要显示的
    rest: '', // 周六 和 周末 才会有这个字段，分别为 6 和 7
    prev: true, // 如果是月初补的数据，会有这个字段，值为true
    next: true, // 如果是月尾补的数据，会有这个字段，值为true
    disabled: true, // 如果是月初或月尾补的数据，会有这个字段，值为true
}
```


### getCurWeekByDate

> 返回当月的第一天是周几。(0-6)->(周日-周六)

### isLeapYear

> 检测当年前是否为`闰年`。(是：true；否：false)

## Attribute

### D

> Date类的实例化，如果调用了config，会重新实例化。

### year

> 年份，默认当前年。

### month

> 月份，默认当前月。

### day

> 天，默认当天。

### date_str

> 当年年月日的字符串，格式 `year-month-day`

### allMonthCountDays

> 当年每月的天数，**注意，是从12月开始，遵循Date默认模式**。格式：

```javascript
[
    31, // 12 月
    31, // 1 月
    28 || 29, // 2 月，闰年29，否则28
    31, // 3 月
    30, // 4 月
    31, // 5 月
    30, // 6 月
    31, // 7 月
    31, // 8 月
    30, // 9 月
    31, // 10 月
    30 // 11 月
]
```

### curMonthCountDays

> 当月总天数，根据`month`从`allMonthCountDays`获取而来。

### firstDay

> 当月的第一天是周几。(0-6)->(周日-周六)。调用`getCurWeekByDate`获取而来。