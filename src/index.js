module.exports = function reverse(n) {
    let num = String(n)
    if (
        String(n).slice(0, 1) === '-'
        || String(n).slice(0, 1) === '0'
    ) {
        num = String(n).slice(1)
    }
    return num.split('').reverse().join('')
}