import { dayAsNumber, formatDate, weekday } from "@/helpers/dateHelper";

describe("weekday returns weekday from Date as String", () => {
  it("should return Donnerstag", () => {
    const date = new Date(1634808912223); // Thursday, 21.10.21
    const weekday1 = weekday(date);
    expect(weekday1).toBe("Donnerstag");
  });
});

describe("dayAsNumber returns weekday from Date as Number ", () => {
  it("should return 3 when the day is Thursday", () => {
    const date = new Date(1634808912223); // Thursday, 21.10.21
    const weekday1 = dayAsNumber(date);
    expect(weekday1).toBe(3);
  });

  it("should return 5 if the day is Saturday and surpassWeekend is not set", () => {
    const date = new Date(1634982861000); // Thursday, 21.10.21
    const weekday1 = dayAsNumber(date);
    expect(weekday1).toBe(5);
  });

  it("should return 7 if the day is Saturday and surpassWeekend is set", () => {
    const date = new Date(1634982861000); // Saturday, 23.10.21
    const weekday1 = dayAsNumber(date, true);
    expect(weekday1).toBe(7);
  });
});

describe("formatDate returns Date in DD.MM.YYYY format", function() {
  it("should return 21.10.2021", () => {
    const date = new Date(1634808912223); // Thursday, 21.10.21
    const weekday1 = formatDate(date);
    expect(weekday1).toBe("21.10.2021");
  });
});
