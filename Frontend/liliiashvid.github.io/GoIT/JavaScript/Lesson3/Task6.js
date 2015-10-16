/**
 * Created by User on 11.10.2015.
 */
function pow(x, n){
    var result = x;
    for(var i = 1; i < n; i++){
        result *= x;
    }
    return result;
}
console.log(pow(3, 3));