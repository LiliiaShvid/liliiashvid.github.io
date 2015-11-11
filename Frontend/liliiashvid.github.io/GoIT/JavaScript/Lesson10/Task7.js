//Write a function suffle(arr) to shuffle an array.

function random(a, b) {
    return Math.random() - 0.5;
}
function suffle(arr) {
    arr=arr.sort(random);
    console.log(arr);
}

suffle([1,2,3,4,5,6]);
