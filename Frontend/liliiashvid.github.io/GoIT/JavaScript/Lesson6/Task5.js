/**
 * Задание 5 (Проверка на палиндром)
 */


function checkPalindrome(str) {
    var strToArr = str.toLowerCase().split('');
    strToArr.forEach(function (letter) {
        if (letter === ' ') {
            strToArr.splice(strToArr.indexOf(letter), 1);
        }
    });

    var result = strToArr.join('').split(''),
        copy = result.slice();


    return result.join('') === copy.reverse().join('');
}

console.log(checkPalindrome('Anna')); // true
console.log(checkPalindrome('А роза упала на лапу Азора')); //true
console.log(checkPalindrome('Вася')); //false
console.log(checkPalindrome('12321')); //true
console.log(checkPalindrome('123212')); //false