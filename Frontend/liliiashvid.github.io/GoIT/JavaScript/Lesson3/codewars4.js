/**
 * Created by User on 11.10.2015.
 */
function lovefunc(flower1, flower2){
    if((flower1%2 === 0 && flower2%2 === 0) ||
        (flower1%2 != 0 && flower2%2 != 0)){
        return false;
    }
    return true;
}