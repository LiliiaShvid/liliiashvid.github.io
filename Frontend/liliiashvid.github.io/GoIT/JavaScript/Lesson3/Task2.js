/**
 * Created by User on 11.10.2015.
 */
var number1 = 2, number2 = 10;
for(var i = number1; i <=number2; i++){
    for(var j = 2; j < i; j++) {
        if (i % j === 0) break;
    }
    if(j==i){
        alert(i);
    }
}