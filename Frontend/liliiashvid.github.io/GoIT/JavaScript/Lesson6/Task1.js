/**
 * Задание 1 (Удаление css клссов)
 */
function removeClass(obj, cls) {
    var classes = obj.className ? obj.className.split(' ') : [];

    for (var i = 0; i < classes.length; i++) {
        while (classes[i] == cls) {
            classes.splice(i, 1);
        }
    }
    obj.className = classes.join(' ');
}

var obj = {
    className: 'open menu my menu menu'
};

removeClass(obj, 'menu');
console.log(obj.className);