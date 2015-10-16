/**
 * Created by User on 11.10.2015.
 */
var width = 8, height = 8;
var sharp = "";
for(var i = 0; i < height; i++){
    for(var j = 0; j < width; j++){
        if(((j%2 == 0) && (i%2 == 0)) || ((j%2 != 0) && (i%2 != 0))){
            sharp = sharp + '#';
        }
        if(((j%2 != 0) && (i%2 ==0)) || ((j%2 == 0) && (i%2 != 0))){
            sharp = sharp + ' ';
        }
        if(j == width-1){
            console.log(sharp);
            sharp = "";
        }
    }
}