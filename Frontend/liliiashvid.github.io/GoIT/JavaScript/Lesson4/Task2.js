/**
 * Created by User on 25.10.2015.
 */
function checkSpam(str){
    if((str.indexOf("spam")) >= 0 || (str.indexOf("sex") >= 0)){
        return true;
    }
    return false;
}