/**
 * Created by User on 25.10.2015.
 */
function takesLength(len) {
    if (len.length<=20){
        return len;
    }
    else {
        return len.substring(0, 20)+ "...";}
}
console.log(takesLength('511222299944'));
