// src/__tests__/utils.test.js
import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  // Basic functionality
  it("calculates correct points for lowercase word", () => {
    const word = "test"; // t(2) + e(1) + s(2) + t(2) = 7
    expect(pointsForWord(word)).toBe(7);
  });

  // Case insensitivity
  it("handles mixed case words", () => {
    const word = "TeSt";
    expect(pointsForWord(word)).toBe(7);
  });

  // Edge cases
  it("returns 0 for empty string", () => {
    expect(pointsForWord("")).toBe(0);
  });

  it("scores all vowels correctly", () => {
    expect(pointsForWord("aeiou")).toBe(5); // 1 point per vowel
  });

  it("scores all consonants correctly", () => {
    expect(pointsForWord("bcdfg")).toBe(10); // 2 points per consonant
  });

  // Special characters
  it("ignores numbers in word", () => {
    expect(pointsForWord("h3ll0")).toBe(6); // h(2) + l(2) + l(2) = 6
  });

  it("ignores punctuation in word", () => {
    expect(pointsForWord("hello!")).toBe(8); // h(2) + e(1) + l(2) + l(2) + o(1) = 8
  });

  // Error handling
  it("throws error for non-string input", () => {
    expect(() => pointsForWord(123)).toThrow("Input must be a string");
    expect(() => pointsForWord(null)).toThrow("Input must be a string");
    expect(() => pointsForWord(undefined)).toThrow("Input must be a string");
    expect(() => pointsForWord({})).toThrow("Input must be a string");
  });
});