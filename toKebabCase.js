/**
 * Converts a string to kebab-case format
 * @param {string} str - The input string to convert
 * @returns {string} The kebab-case formatted string
 */
function toKebabCase(str) {
  return str
    .toLowerCase() // Convert the input string to lowercase
    .replace(/[\s_]+/g, '-') // Replace all spaces and underscores with a single hyphen
    .replace(/-+/g, '-') // Remove duplicate hyphens
    .replace(/^-+|-+$/g, ''); // Trim hyphens from the start and end
}

module.exports = toKebabCase;

// Console.log examples
console.log(toKebabCase('Hello World')); // hello-world
console.log(toKebabCase('User_Profile_Data')); // user-profile-data
