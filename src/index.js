module.exports = function toReadable (number) {
    let result = '';
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];

    const str = number.toString();
    result = str.split('').map((el, i) => {
        let newEl = '';
        if (str.length === 1 && str[0] === '0') {
            newEl = 'zero';
        } else if (str.length === 3 && i === 0) {
            newEl = `${units[el]} hundred `;
        } else if (str.length > 1 && str[str.length - 2] !== '1' && i === str.length - 2) {
            newEl = tens[el - 2];
        } else if (str.length > 1 && str[str.length - 2] === '1' && i === str.length - 1) {
            newEl = teens[el] || '';
        } else if (str[str.length - 2] !== '1' && i === str.length - 1) {
            newEl = units[el];
        }
        return newEl;
    }).join('');
    return result.trim();
}
