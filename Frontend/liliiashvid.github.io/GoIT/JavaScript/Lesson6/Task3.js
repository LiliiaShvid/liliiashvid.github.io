/**
 * Задание 3 (Random sort)
 */
function randSort(a, b) {
    return Math.random() ;
}

var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.sort(randSort));