

function My_First_Function() { //naming function
    var str="This text is green!";//assigning value to variable
    var result=str.fontcolor("green");//assigning font color to variable str
    document.getElementById("Green_Text").innerHTML=result;
}

function My_Function() {//naming function
    var sentence="I am learning";//assigning value to variable
    sentence +="a lot from this book";//concatenating strings
    document.getElementById("concatenate").innerHTML=sentence;//putting value of sentence into "concatenate" element

}

function My_Function_3() {
    var x=getElementById("demo");//get element with id="red"
    x.fontcolor="red";//change  color of element
}