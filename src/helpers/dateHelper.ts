import { nullOrUndefined } from "@/helpers/checks";

export const weekdays = [
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
  if (nullOrUndefined(d)) {
    return "";
  }
  return `${d.getDate().toString().padStart(2, "0")}.${(d.getMonth() + 1).toString().padStart(2, "0")}.${d.getFullYear()}`;
}

/**
 * Create Date from string in format dd.mm.yyyy
 * @param s
 */
export function dateFromString(s: string): Date | null {
  if (nullOrUndefined(s)) {
    return null;
  }
  const [day, month, year] = s.split(".");
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
}

/**
 * Return Weekday of Date as String.
 * @param d
 * @returns {string}
 */
export function dayAsWord(d: Date | null): string {
  if (nullOrUndefined(d)) {
    return "";
  }
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

export function isWeekend(d: Date): boolean {
  return d.getDay() === 0 || d.getDay() === 6
}
