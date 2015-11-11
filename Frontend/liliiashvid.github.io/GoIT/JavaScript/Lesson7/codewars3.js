var make_lazy = function () {
    var args = arguments;
    return function () {
        return args[0].apply(args, [].splice.call(args, 1));
    };
};


var double = function (n) {
    return n * 2;
};

var lazy_value = make_lazy(double, 5);

console.log(lazy_value());

var add = function (a, b) {
    return a + b;
};

var lazy_sum = make_lazy(add, 2, 3);

console.log(lazy_sum());
