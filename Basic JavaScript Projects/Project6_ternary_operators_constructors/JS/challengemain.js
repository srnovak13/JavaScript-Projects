function Vote_Function() {
    var Age, can_Vote;
    Age=document.getElementById("Age").value;
    can_Vote=(Age>18)? "You are old enough":"You're too young";
    document.getElementById("vote").innerHTML=can_Vote + "to vote";
}