//Write a JavaScript function that accepts a string as a parameter and converts the first letter of
// each word of the string in upper case. Go to the editor
//Example string: the quick brown fox
//Expected Output: The Quick Brown Fox
//
function firstLetToUpper(str) {
    var splitted = str.split(' ');

    return splitted.map(function(word) {
        return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
}

console.log(firstLetToUpper('the quick brown fox'));