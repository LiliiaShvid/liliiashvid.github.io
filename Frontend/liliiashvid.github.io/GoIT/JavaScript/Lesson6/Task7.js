//Задание 7 (Анаграммы)
//Анаграммы — слова, состоящие из одинакового количества одинаковых букв, но в разном порядке.
// Например:воз - зов киборг - гробик корсет - костер - сектор Напишите функцию anClean(arr), которая возвращает массив слов, очищенный от анаграмм.
function anClean(arr) {
    var result = [],
        obj = {},
        prop;

    for (var i = 0; i < arr.length; i++) {
        prop = arr[i].toLowerCase().split('').sort().join('');
        obj[prop] = arr[i];
    }
    for (var key in obj) result.push(obj[key]);
    return result;
}

var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

console.log(anClean(arr));