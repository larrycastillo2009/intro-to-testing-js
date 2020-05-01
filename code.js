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
    return true;
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
    return input.toLowerCase() === a || input.toLowerCase() === e || input.toLowerCase() === i || input.toLowerCase() === o || input.toLowerCase() === u;
}

function add(x,y){
    if(typeof x === NaN || typeof y === NaN) {
        return NaN;
    }else{
        return parseFloat(x) +parseFloat(y);
    }

}