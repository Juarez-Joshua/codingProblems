/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let numberAsString = n.toString(2)
    let count = 0;
    for(let i = 0; i < numberAsString.length; i++){
        if(numberAsString[i] === '1'){
            count++;
        }
    }
    return count
};
console.log(hammingWeight(0o10000000));
console.log(hammingWeight(0o1011));