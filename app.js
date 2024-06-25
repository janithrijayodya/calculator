console.log("hi");

// function calc(){

//     let number1 =  document.getElementById("number01").value;
//     let number2 = document.getElementById("number02").value;
//     let lblMulti = document.getElementById("multi");

//     lblMulti.innerHTML=number1*number2;


// }



function calc(){

let number1 ;
let number2 ;

number1 =  new Number(document.getElementById("number01").value);
number2 =  new Number(document.getElementById("number02").value);

let lblMulti = document.getElementById("multi");
    
lblMulti.innerHTML=number1*number2;
// console.log(number01+number02);

// console.log(typeof number01);
// console.log(typeof number01);

}


function calcAdd(){
    let number1 ;
    let number2 ;

    number1 =  new Number(document.getElementById("number01").value);
    number2 =  new Number(document.getElementById("number02").value);

    let lblAdd = document.getElementById("ADD");
    
    lblAdd.innerHTML=number1+number2;

}

function calcSub(){
    let number1 ;
    let number2 ;

    number1 =  new Number(document.getElementById("number01").value);
    number2 =  new Number(document.getElementById("number02").value);
    
    let lblSub = document.getElementById("SUB");
    
    lblSub.innerHTML=number1-number2;

}

function calcDiv(){
    let number1 ;
    let number2 ;

    number1 =  new Number(document.getElementById("number01").value);
    number2 =  new Number(document.getElementById("number02").value);
    
    let lblDiv = document.getElementById("DIV");
    
    lblDiv.innerHTML=number1/number2;

}


