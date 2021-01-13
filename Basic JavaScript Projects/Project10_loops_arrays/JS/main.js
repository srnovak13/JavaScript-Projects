function Call_Loop() {
    var Digit="";
    var X=1;
    while (X<11){
        Digit +="<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML= Digit;
}

function my_Function() {
var str="My name is Steve Novak and I'm studying JavaScript";
var s=str.length;
document.getElementById("long").innerHTML=s;
}


    var Instruments= ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var Content="";
    function for_Loop() {
        for (Y = 0; Y < Instruments.length; Y++) {
            Content += Instruments[Y]+"<br>";
        }
        document.getElementById("List_of_instruments").innerHTML= Content;
    }

    function array_Function() {
        var Dog_Picture = [];
        Dog_Picture[0] ="sleeping";
        Dog_Picture[1] ="eating";
        Dog_Picture[2] ="running";
        Dog_Picture[3] ="barking";
        Dog_Picture[4] ="playing";
        document.getElementById("Array").innerHTML="In this picture, the dog is " + Dog_Picture[2]+ ".";
    }

    function constant_Function() {
        const Dog_Type= {breed: "bulldog", size:"medium", color:"brindle"}
        Dog_Type.color="black";
        Dog_Type.size="large";
        document.getElementById("Constant").innerHTML="This breed of dog is "+Dog_Type.breed+" and is "+Dog_Type.color+" in color";
    }

    var Z= 1980; 
    document.write(Z);
    {
        let Z= 2021; 
        document.write("<br>"+ Z);
    }
    var Z=2012;
    document.write("<br>"+ Z);

    var W= myFunction(7, 13) 
        function myFunction(a, b) {
        return a * b;
    }
    document.getElementById("mathreturn").innerHTML= W;

    let electronics= {
        brand: "Apple", 
        type: "iPhone",
        iOS: "14.2",
        color: "Pacific Blue",
        description: function() {
            return "This is a "+ this.brand + this.type + " running OS " + this.iOS + " and is " + this.color;
        }

    };
    document.getElementById("electronic_object").innerHTML=electronics.description();

    var text="";
    var B;
    for (B = 0; B<10; B++) {
        if (B===3) {break;}
        text += "The number is " + B + "<br>";
    }
    document.getElementById("breakfast").innerHTML= text;

    var text2="";
    var C;
    for (C = 0; C<10; C++) {
        if (C===3) {continue;}
        text += "The number is " + C + "<br>";
    }
    document.getElementById("continuity").innerHTML= text;