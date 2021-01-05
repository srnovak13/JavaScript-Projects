function addition_Function() {
    var addition= 13+7;//Adding 13 and 7
    document.getElementById("math").innerHTML= "13+7="+ addition;
}

function subtraction_Function() {
    var subtraction= 13-7;//Subtracting 7 from 13
    document.getElementById("subtract").innerHTML= "13-7="+subtraction;
    
}

function multiplication_Function() {
    var multiplication= 13*7;//Multiplying 13 and 7
    document.getElementById("multiply").innerHTML= "13*7="+multiplication;
}

function division_Function() {
    var division= 14/7;//Dividing 14 by 7
    document.getElementById("divide").innerHTML= "14/7="+division;
}

function math_Function() {
    var mathematics= (13+7)*10/2-5;//Adding 13 and 7, multiplying by 10, dividing by 2 and subtracting 5
    document.getElementById("alottamath").innerHTML="(13+7)*10/2-5="+mathematics;
}

function modulus_Operator() {
    var remainder= 15%7;//Find the remainder of 15/7
    document.getElementById("modulus").innerHTML="The remainder of 15/7="+remainder;

}

function negation_Operator() {
    var x= 13;//Finding the negative of 13
    document.getElementById("unary").innerHTML=-x;
}

function increment_Operator() {
    var Z=13;
    Z++;//Finding the number increased by 1 of 13
    document.write(Z);
}

function decrement_Operator() {
    var D=13;
    D--;//Finding the decrease by 1 of 13
    document.write(D);
}
 
 window.alert(Math.random()*100);//window pop-up showing a random number
 
 window.alert(Math.sqrt(89));//window pop-up showing the square root 0f 89
    