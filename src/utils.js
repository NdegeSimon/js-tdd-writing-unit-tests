// src/utils.js
export function pointsForWord(word) {
  // Enhanced input validation
  if (typeof word !== "string") {
    throw new TypeError("Input must be a string");
  }

  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let points = 0;

  for (const char of word.toLowerCase()) {
    if (!/[a-z]/.test(char)) continue; // Skip non-alphabetic characters
    points += vowels.has(char) ? 1 : 2;
  }

  return points;
}