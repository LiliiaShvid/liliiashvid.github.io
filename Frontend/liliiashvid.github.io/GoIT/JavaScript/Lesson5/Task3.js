/**
 * Задание 3 (Калькулятор)
 * Напишите код, который:
 *
 *Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
 *Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
 *При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
 *Выводит сумму всех значений массива когда ввод прекращен.
 */
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
var values = [],
    result = 0,
    value;

do {
    value = parseInt(prompt('Please enter number'));
    values.push(value);

} while (isNumeric(value));

for (var i = 0; i < values.length - 1; i++) {
    result += values[i];
}

console.log(result);