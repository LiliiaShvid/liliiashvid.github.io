function createFunctions(n) {
    var callbacks = [];

    for (var i = 0; i < n; i++) {
        (function (i) {
            callbacks.push(function () {
                return i;
            });
        })(i);
    }

    return callbacks;
}

var callbacksArr = createFunctions(7);

console.log(callbacksArr[3]());
console.log(callbacksArr[5]());
console.log(callbacksArr[6]());
