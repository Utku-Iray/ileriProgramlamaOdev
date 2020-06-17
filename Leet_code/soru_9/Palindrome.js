let palindrome = function(word){
    let len= word.lenght;
    let start = word.substring(0,Math.floor(len/2)).toLowerCase();
    let end = word.substring(len-Math.floor(len/2)).toLowerCase();
    //console.log(start, end);
    return word === word.split("").reverse().join("");
}


console.log (palindrome("radar"));
console.log(palindrome("window"))
console.log (palindrome("3333"));
console.log (palindrome("utku"));