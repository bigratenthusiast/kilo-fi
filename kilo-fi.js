/**
 * Duplicates random characters in a string
 * 
 * @param {string} pre - String without duplicated characters
 * @param {number} weight - Float from 0 to 1 of how much of the string
 * @returns {string} String with duplicated characters
 */
function randomDoubleLetters(pre, weight) {
    let post = pre.toLowerCase()
        .replace(/(?<= )./g, (match) => weight > Math.random() ? match.replace(2): match);
    return post;
}

/**
 * Converts a string to kilotype's "nonsense case"
 * 
 * @param {string} pre - String with normal casing and spacing
 * @param {number} weight - Float from 0 to 1 of how much of the case should be affected 
 * @returns {string} String written in the kilotype nonsense case
 */
function nonsenseCase(pre, weight) {
    let post = pre.toLowerCase()
        .replace(/(?<= )./g, (match) => weight > Math.random() ? match.toUpperCase(): match);
    return post;
}

/**
 * Converts a string to kilotype spacing
 * 
 * @param {string} pre - String with normal spacing
 * @param {number} nonsenseWeight - Float from 0 to 1 of how much of the string's chars should be split
 * @param {number} spacingWeight - Float from 0 to 1 of how much of the spacing should be affected 
 * @param {number} propensity - Float from 0 to 1 of how much of affected spacing should be cut, doubled, or tripled respectively 
 * @returns {string} String written in the kilotype spacing style
 */
function randomKerning(pre, nonsenseWeight, spacingWeight, propensity) {
    let post = pre
        .replace(/ /g, () => spacingWeight > Math.random() ? " ".repeat( propensity > Math.random() ? Math.random() > 0.7 ? 3 : 2 : 0) : " ")
        .replace(/./g, (match) => nonsenseWeight > Math.random() ? match + " " : match)

    return post;
}

/**
 * Adds extra kilotyping elements to a string
 * 
 * @param {string} pre - String without extra elements
 * @returns {string} String with extra elements
 */
function extraKilo(pre) {
    // TODO: add more elements
    let post = pre
        .replace(/[\.\!]/g, "  \u203C")
        .replace(/you/g, "U")
        .replace(/'/g, '');
    return post;
}