document.write(typeof 112580);//Giving variabe the data type of "number"

function my_Function() {//Naming function
    document.getElementById("Test").innerHTML= 0/0;//Testing to see if result is a number
}

function my_Function_2() {//Naming function
    document.getElementById("Test2").innerHTML=isNaN("YadaYadaYada");//Testing to see if result is a number
}

function my_Function_3() {//Naming function
    document.getElementById("Test3").innerHTML=isNaN(1980);//Testing to see if result is a number
}

document.write(2E400);//Seeing if number is too large

document.write(-4E234);//Seeing if number is too small

document.write(10>7);//Seeing if the equation is true

document.write(10>139);//Seeing if the equation is false

console.log(13+13);//Seeing if the value "26" appears in the console

document.write("13"+7);//Seeing if the data types are different

console.log(10>13);//Seeing if the equation is false in the console

document.write(13==13);//Seeing if data on right is the same value as value on left

document.write(13==7);//Seeing if data on right is the same value  as value on left

X=13;
Y=13;
document.write(X===Y);//Seeing if data on right is the same value and type as data on left

A=13;
B="13";
document.write(A===B);//Seeing if data on right is the same value and type as data on the left

S="Bob";
T=83;
document.write(S===T);//Seeing if the data on the right is the same value and type as data on the left

F=77;
G=80;
document.write(F===G);//Seeing if the data on the right is the same value and type as data on left

document.write(10>8 && 10<20);//Checking to see if the two equations are true

document.write(13<17 && 20>30);//Checking to see if the two equations are true

document.write(10>7 || 7>5);//Checking to see if one of the two equations are true

document.write(10>13 || 7>9);//Checking to see if one of the two equations are true

function not_Function() {
    document.getElementById("not").innerHTML= !(13>10);//Checking to see if equation is false
}

function not_Function_2() {
    document.getElementById("not2").innerHTML= !(13>20);//Checking to see if equation is false
}