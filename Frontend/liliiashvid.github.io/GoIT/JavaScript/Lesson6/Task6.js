//Задание 6 (Уникальные элементы массива)
//Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr (arr — массив строк).
function unique(arr) {
    var result = {};

    for (var i = 0; i < arr.length; i++) {
        var word = arr[i];
        result[word] = true;
    }
    return Object.keys(result);
}

var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()'];
console.log(unique(strings));