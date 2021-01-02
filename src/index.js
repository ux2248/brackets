module.exports = function check(str, bracketsConfig) {
    let arr = [];
    for (let i of bracketsConfig) {
        i = i.toString().replace(",", "");
        arr.push(i);
    }
    let test = (string) => {
        for (let j of arr) {
            if (string.includes(j)) {
                string = string.replace(j, "");
            }
        }
        str = string;
        for (let i of arr) {
            while (str.includes(i)) {
                test(str);
            }
        }
    }
    test(str);
    return str.length === 0;
}
