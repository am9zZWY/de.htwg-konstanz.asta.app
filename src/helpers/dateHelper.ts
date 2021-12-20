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
export function formatDate(d: Date): string {
  return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
}

/**
 * Return Weekday of Date as String.
 * @param d
 * @returns {string}
 */
export function weekday(d: Date): string {
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
export function dayAsNumber(d: Date, surpassWeekend: boolean = false): number {
  let day = (d.getDay() - 1 + 7) % 7;
  if (surpassWeekend && day >= 5) {
    day = 7;
  }
  return day;
}
