
let x = "";
let y = eval(x);
let z = "";

function display(){
    document.getElementById("display").innerHTML=z;
}
function number1(){
    x += "1";
    z += "1";
    display();
}
function number2(){
    x += "2";
    z += "2";
    display();
}
function number3(){
    x += "3";
    z += "3";
    display();
}
function number4(){
    x += "4";
    z += "4";
    display();
}
function number5(){
    x += "5";
    z += "5";
    display();
}
function number6(){
    x += "6";
    z += "6";
    display();
}
function number7(){
    x += "7";
    z += "7";
    display();
}
function number8(){
    x += "8";
    z += "8";
    display();
}
function number9(){
    x += "9";
    z += "9";
    display();
}
function number0(){
    x += "0";
    z += "0";
    display();
}
function equals(){
    z += ` = ${eval(x)}`;
    display();
    x = " ";
}
function plus(){
    x += " + ";
    z += " + ";
    display();
}
function minus(){
    x += " - ";
    z += " - ";
    display()
}

function multiply(){
    x += " * "
    z += "  &#xd7;  "
    display()
}
function multiply(){
    x += " * "
    z += "  &#xd7;  "
    display()
}
function divide(){
    x += " / "
    z += "  &#xf7;  "
    display()
}
function clear_me(){
    x = " ";
    z = "";
    display()
}

