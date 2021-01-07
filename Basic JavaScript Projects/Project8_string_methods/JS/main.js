function preamble_Function() {
    var text_1="We the People of the United States,";
    var text_2="in Order to form a more perfect Union,";
    var text_3="establish Justice, insure domestic Tranquility";
    var text_4="provide for the common defense, promote the general Welfare";
    var text_5="and secure the Blessings of Liberty to ourselves";
    var text_6="and our Posterity, do ordain and establish this";
    var text_7="Constitution for the United States of America.";
    var Preamble= text_1.concat(text_2, text_3, text_4, text_5, text_6, text_7);
    document.getElementById("concastitution").innerHTML= Preamble;
}

function slice_Method() {
    var Sentence="We the People of the United States...";
    var Section= Sentence.slice(7,13);
    document.getElementById("slice").innerHTML=Section;
}

function upper_Function() {
    var text=document.getElementById("uppercase").innerHTML;
    document.getElementById("uppercase").innerHTML=text.toUpperCase();
}

var str="We the People of the United States";
var pos= str.search("States");
document.getElementById("united").innerHTML=pos;//For some reason this code is not working in the browser. Console.log says "cannot have innerHTML value as 'null"

function string_Method() {
    var X=1776;
    document.getElementById("Numbers_to_string").innerHTML=X.toString();
}

function precision_Method() {
    var Z=1776.07041791;
    document.getElementById("precision").innerHTML=Z.toPrecision(10);
}

var A=1776.0704;

document.getElementById("fixed").innerHTML=//This code isn't showing up in browser
    A.toFixed(0)+"<br>"+
    A.toFixed(2)+"<br>"+
    A.toFixed(4);

var B=1776;

document.getElementById("valuedemo").innerHTML=//This code is also not showing up in browser
    B.valueOf()+"<br>"+
    (1776).valueOf()+"<br>"+
    (1000+776).valueOf();

