// helloWorld function
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input){
    if(input === true){
        return "Hello, World!";
    }
    else if(input){
        return "Hello, " + input + "!";
    }else{
        return "Hello, World!";
    }
}

function isFive(input){
    return parseFloat(input) === 5;
}

function isEven(input){
    if(typeof input === "boolean"){
        return false;
    }else if(typeof parseFloat(input) === "number"){
        return input % 2 === 0;
    }
    else {
        return false;
    }

}


function isVowel(input){
    if(typeof input === "string"){
    if(input.toLowerCase() === "a" || input.toLowerCase() === "e" || input.toLowerCase() === "i" || input.toLowerCase() === "o" || input.toLowerCase() === "u") {
        return true;
    }else{
        return false;
    }
    }else if (input === null){
        return false;
    }else if(typeof input === "boolean"){
        return false;
    }else if(typeof input === "number"){
        return false;
    }
    else{
        return false;
    }
}


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function add(x,y){
    if(!isNumeric(x) || !isNumeric(y)) {
        return "not a number";
    }else{
        return parseFloat(x) +parseFloat(y);
    }

}