import { formatRuntime } from "./formatRuntime";

describe("formatRuntime", () => {
  test("formats runtime less than 60 minutes", () => {
    expect(formatRuntime(45)).toBe("45 minutes");
    expect(formatRuntime(1)).toBe("1 minute");
  });

  test("formats runtime of exactly 60 minutes", () => {
    expect(formatRuntime(60)).toBe("1 hour");
  });

  test("formats runtime more than 60 minutes", () => {
    expect(formatRuntime(125)).toBe("2 hours and 5 minutes");
    expect(formatRuntime(90)).toBe("1 hour and 30 minutes");
  });

  test("handles edge cases", () => {
    expect(formatRuntime(0)).toBe("0 minutes");
  });
});
