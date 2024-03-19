const moment = require('moment');
const LunarCalendar = require('lunar-calendar');

function getCurrentLunarDate() {
    const currentDate = moment();
    const lunarDate = LunarCalendar.calendar.solar2lunar(currentDate.year(), currentDate.month() + 1, currentDate.date());
    return {
        year: lunarDate.lYear,
        month: lunarDate.lMonth,
        day: lunarDate.lDay
    };
}

function getNextFullMoonDate() {
    const currentDate = moment();
    const nextFullMoon = LunarCalendar.calendar.lunar2solar(LunarCalendar.calendar.nextN(1, currentDate.year(), currentDate.month() + 1, currentDate.date()));
    return {
        year: nextFullMoon.cYear,
        month: nextFullMoon.cMonth,
        day: nextFullMoon.cDay
    };
}

module.exports = {
    getCurrentLunarDate,
    getNextFullMoonDate
};
