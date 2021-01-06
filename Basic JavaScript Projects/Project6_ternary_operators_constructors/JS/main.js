function Ride_Function() {
    var Height, Can_ride;
    Height=document.getElementById("Height").value;
    Can_ride=(Height<52)? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML=Can_ride + "to ride.";
}

function Guest(Age, Height, Weight, Sex) {
    this.Guest_Age= Age;
    this.Guest_Height= Height;
    this.Guest_Weight= Weight;
    this.Guest_Sex= Sex;

}

var Steve= new Guest(40, "69in", 170, "Male");
var Carrie= new Guest(35, "48in", 130, "Female");
var Rob= new Guest(38, "73in", 200, "Male");
var Stephanie= new Guest(33, "65in", 150, "Female");

function my_Function() {
    document.getElementById("New_and_This").innerHTML= "Steve is"+ Steve.Guest_Age+"years old"+"He is"+Steve.Guest_Height+"tall"
    +"and weighs"+Steve.Guest_Weight;
}

function count_Function() {
    document.getElementById("Nested_Function").innerHTML= Count();
    function Count() {
        var Starting_Point=12;
        function Plus_one() {Starting_Point+=1;}
        Plus_one();
        return Starting_Point;
    }
}