var equation = ""
var results = document.getElementById("results")
function createEquation(value){
    equation += value;
    console.log(equation)
    results.innerHTML = equation;
}

function clearEquation(){
    equation = "";
    results.innerHTML = "0";
}

function getAnswer(){
    try{
        var answer = parse(equation)
        results.innerHTML = answer;
        equation = "";
    }catch(error){
        if(error instanceof SyntaxError){
            results.innerHTML = "0";
            equation = "";  
        }
    }
     
}

function parse(str) {
    return Function(`'use strict'; return (${str})`)()
  }
