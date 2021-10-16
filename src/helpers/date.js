/**
 * https://stackoverflow.com/a/27323864
 * @param timeStamp
 * @returns {number}
 */
export function roundDate(timeStamp) {
  timeStamp -= timeStamp % (24 * 60 * 60 * 1000); //subtract amount of time since midnight
  timeStamp += new Date().getTimezoneOffset() * 60 * 1000; //add on the timezone offset
  return new Date(timeStamp).getTime();
}

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

export function date(d) {
  return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
}

export function weekday(d) {
  return weekdays[d.getDay() - 1];
}
