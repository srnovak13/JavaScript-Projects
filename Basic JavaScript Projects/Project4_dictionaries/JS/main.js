function my_Dictionary() {//Naming of fuction
    var Book= {//Naming variable "Book"
        Genre: "Horror",//Naming genre
        Year_Written: "1926",//Giving value of year written
        Author: "H.P.Lovecraft",//Naming Author
        Title: "The Call of Cthulhu",//Naming title of "Book"
        Title: "The Rats in the Walls",//Naming title of "Book"

    };
    delete Book.Title;//Deleting title of book
    document.getElementById("Dictionary").innerHTML= Book.Title;
}


