/**
 * Returns a new Date with the option to surpass the weekend.
 * @param surpassWeekend
 * @returns {*}
 */
export function createDate(surpassWeekend = false) {
  let d = new Date();
  let dAsNumber = dayAsNumber(d);
  if (dAsNumber >= 5 && surpassWeekend) {
    d.setDate(d.getDate() + (7 - dAsNumber));
  }
  return d;
}

/**
 * https://stackoverflow.com/a/27323864
 * Round milliseconds of date to 00:00:00.
 * @param timeStamp
 * @returns {number}
 */
export function roundDate(timeStamp) {
  timeStamp -= timeStamp % (24 * 60 * 60 * 1000); //subtract amount of time since midnight
  timeStamp += new Date().getTimezoneOffset() * 60 * 1000; //add on the timezone offset
  return new Date(timeStamp).getTime();
}

/**
 * Add days to Date.
 * @param d
 * @param days
 * @returns {*}
 */
export function addDay(d, days) {
  let _d = new Date(d.getTime());
  _d.setDate(_d.getDate() + days);
  return _d;
}

/**
 * Convert milliseconds to seconds.
 * @param timestamp
 * @returns {number}
 */
export function toSeconds(timestamp) {
  return Math.round(timestamp / 1000);
}

const weekdays = [
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
  "Sonntag",
];

/**
 * Format Date as String.
 * @param d
 * @returns {string}
 */
export function formatDate(d) {
  return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
}

/**
 * Return Weekday of Date as String.
 * @param d
 * @returns {string}
 */
export function weekday(d) {
  return weekdays[dayAsNumber(d)];
}

/**
 * Get Day starting from 0.
 * If Saturday or Sunday set to next Monday.
 *
 * @param {Date} d
 * @param {boolean} surpassWeekend
 * @returns {number}
 */
export function dayAsNumber(d, surpassWeekend = false) {
  let day = (d.getDay() - 1 + 7) % 7;
  if (surpassWeekend && day >= 5) {
    day = 7;
  }
  return day;
}
