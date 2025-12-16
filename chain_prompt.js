function toKebabCase(str) {
    return str
        .toLowerCase()
        .replace(/[\s_]+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');
}

module.exports = toKebabCase;

console.log(toKebabCase('Hello World'));
console.log(toKebabCase('User_Profile_Data'));