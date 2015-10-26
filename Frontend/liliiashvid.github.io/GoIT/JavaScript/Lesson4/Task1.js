/**
 * Created by User on 25.10.2015.
 */
function fib(n) {
    if (n <= 1) {
        return n;
    }
    else {
        return (fib(n - 1) + fib(n - 2));
    }
}

console.log(fib(3));
console.log(fib(7));
console.log(fib(11));