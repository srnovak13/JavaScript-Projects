var S="Steve";//Naming  global variable S
var N="Novak";//Naming global variable N
function name_Function() {//Naming function
    document.write(S+N);//Write to document variable S and N
}

function name_Function_2() {//Naming function
    document.write(S+1980);//Write to document var S and 1980
}

function name_Function() {//Naming function
    var R="Robert";//Naming local variable
    document.write(S+R+N);//Write to document both global variables and local variable
}

function name_Function_2() {//Naming function
    document.write(S+R+N);//Testing to see if document will write two global variables as well as a local variable not local to this fuction
}

console.log(R+N);//Checking console log for errors


name_Function();//I have no idea why these two are here but I'm leaving them just in case! I don't see their usage though
name_Function_2();

function greet_Function() {//Naming function
    if (new Date().getHours()<12); {//Telling function that if the time is over Noon to write "Good Day, Mate!"
    document.getElementById("Goodday").innerHTML="Good Day, Mate!"
    }
}

function city_Function() {//Naming function
    City=document.getElementById("City").value;//Getting "City" variable name from input
    if (City="Seattle") {
        School="You can go to school here";//If you live in this city, you can go to school in this district
    }
    else {
        School="You can't go to school here";//Else, find another local school
    }
    document.getElementById("Where_do_you_live?").innerHTML= School;
}

function Time_function() {//Naming function
    var Time= new Date().getHours();//var Time is the date and current local time
    var Reply;
    if (Time<12==Time>0) {//If the local time is between midnight(0) and noon(12) print the reply
        Reply="It is morning time"; 
    }
    else if (Time>12==Time<18) {//or if the local time is between noon and 6(18) print this reply
        Reply="It is afternoon"; 
    }
    else {
        Reply="It is evening time"; //if neither, print this reply
    }
    document.getElementById("Time_of_day").innerHTML= Reply;

    
       
    
}