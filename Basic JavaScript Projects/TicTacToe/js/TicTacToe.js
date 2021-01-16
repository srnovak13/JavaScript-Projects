//This variable keeps track of whose turn it is
let activePlayer = "X";
//This array store an array of moves. We use this to determine win conditions.
let selectedSquares = [];

//This function is for placing an xo or o in a square
function placeXOrO(squareNumber) {
    //This condition ensures a square hasn't been selected already.
    //The .some()method is used to check each element of selctedSquare array
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //This variable retrieves the html element id that was clicked.
        let select= document.getElementById(squareNumber);
        //This condition checks who's turn it is.
        if (activePlayer === "X") {
            //if activePlayer is equal to X, the x.png is placed in HTML.
            select.style.backgroundImage= "url('images/x.png')";
            //Active player many only be "X" or "O" so, if not "X" it must be "O"
        } else {
            //If active player is equal to "O" the o.png is placed in the HTML
            select.style.backgroundImage= "url('images/o.png')";
        }
        //squareNumber and activePLayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions.
        checkWinConditions();
        //This condition is for changing the active player.
        if (activePlayer === "X") {
            //If active player is X change it to O.
            activePlayer = "O";
            //If active player is anything other than X.
        }
        else {
            //Change the activePlayer to X
            activePlayer= "X";
        }
        //This function plays placement sound.
        audio("./media/cartoonPop.mp3");
        //This condition checks. to see if it is computer turn.
        if (activePlayer === "O") {
            //This function disables clicking for computer choice.
            disableClick();
            //This function waits 1 second before placing the image
            //and enabling click.
            setTimeout(function() { computersTurn(); } , 1000);
        }
        //Returning true is needed for our computersTurn() function to work
        return true;
    }
    //This function results in a random square being selected.
    function computersTurn() {
        //This boolean is needed for our while loop.
        let success = false;
        //This variable stores a random number 0-8.
        let pickASquare;
        //This condition allows our while loop to keep
        //trying if a square is selected already.
        while(!success) {
            //A random number between 0 and 8 is selected.
            pickASquare = String(Math.floor(Math.random()*9));
            //If the random number evaluates returns true, the square hasn't been selected yet.
            if (placeXOrO(pickASquare)) {
                //This line call the function.
                placeXOrO(pickASquare);
                //This changes our boolean and ends the loop.
                success = true; 
            };
        }
    }
}
//This function parses the selectedSquares array to search for win conditions.
//drawWinLine function is called to draw line if condition is met.
function checkWinConditions() {
    //X O, 1, 2 condition
    if      (arrayIncludes("OX", "1X", "2X")) { drawWinLine(50, 100, 558, 100); }
    //X 3, 4, 5 condition
    else if (arrayIncludes("3X", "4X", "5X"))  {drawWinLine(50, 304, 558, 304) ; }
    //X 6, 7, 8 condition
    else if (arrayIncludes("6X", "7X", "8X"))  {drawWinLine(50, 508, 558, 508) ; }
    //X 0, 3, 6 condition
    else if (arrayIncludes("0X", "3X", "6X"))  {drawWinLine(100, 50, 100, 558) ; }
    //X 1, 4, 7 condition
    else if (arrayIncludes("1X", "4X", "7X"))  {drawWinLine(304, 50, 304, 558) ; }
    //X 2, 5, 8 condition
    else if (arrayIncludes("2X", "5X", "8X"))  {drawWinLine(508, 50, 508, 558) ; }
    //X 6, 4, 2 condition
    else if (arrayIncludes("6X", "4X", "2X"))  {drawWinLine(100, 508, 510, 90) ; }
    //X 0, 4, 8 condition
    else if (arrayIncludes("0X", "4X", "8X"))  {drawWinLine(100, 100, 520, 520) ; }
    //O 0, 1, 2 condition
    else if (arrayIncludes("0O", "1O", "2O"))  {drawWinLine(50, 100, 558, 100) ; }
    //O 3, 4, 5 condition
    else if (arrayIncludes("3O", "4O", "5O"))  {drawWinLine(50, 304, 558, 304) ; }
    //O 6, 7, 8 condition
    else if (arrayIncludes("6O", "7O", "8O"))  {drawWinLine(50, 508, 558, 508) ; }
    //O 0, 3, 6 condition
    else if (arrayIncludes("0O", "3O", "6O"))  {drawWinLine(100, 50, 100, 558) ; }
    //O 1, 4, 7 condition
    else if (arrayIncludes("1O", "4O", "7O"))  {drawWinLine(304, 50, 304, 558) ; }
    //O 2, 5, 8 condition
    else if (arrayIncludes("2O", "5O", "8O"))  {drawWinLine(508, 50, 508, 558) ; }
    //O 6, 4, 2 condition
    else if (arrayIncludes("6O", "4O", "2O"))  {drawWinLine(100, 508, 510, 90) ; }
    //O 0, 4, 8, condition
    else if (arrayIncludes("0O", "4O", "8O"))  {drawWinLine(100, 100, 520, 520) ; }
    //This condition checks for tie. If none of the above conditions register
    //and 9 squares are selected, the code executes.
    else if (selectedSquares.length >= 9) {
        //This function plays the tie game sound.
        audio(",/media/tieGame.mp3");
        //This function sets a .3 second timer before the resetGame is called.
        setTimeout(function () {resetGame(); }, 1000);
    }
    //This function checks if an array includes 3 strings.
    //It is used to check for each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        //The next 3 variables will be used to check for 3 in a row.
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //If the 3 variables we pass are all included in our array true is
        //returned and our else if condition executes the drawWinLine function.
        if (a === true && b === true && c === true) {return true;}

    }
}

//This function makes our body element temporarily unclickable.
function disableClick() {
    //This makes our body unclickable.
    body.style.pointerEvents = "none";
    //This makes our body unclickable again after 1 second.
    setTimeout(function () {body.style.pointerEvents= "auto"; }, 1000);
}

//This function takes a string parameter of the path you set earlier for
//placement sound (./media/place.mp3')
function audio(audioURL) {
    //we create a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    //Play methdod plays our audio sound.
    audio.play();
}

//This function utilizes html canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //This line accessees our html canvas element
    const canvas = document.getElementById("win-lines");
    //This line gives us access to methods and properties to use on canvas.
    const c = canvas.getContext("2d");
    //This line indicates where the start of a lines x axis is. 
    let x1 = coordX1,
        //This line indicates where the start of a lines y axis is.
        y1 = coordY1, 
        //This line indicates where the end of a lines x axis is. 
        x2 = coordX2,
        //This line indicates where the end of a lines y axis is.
        y2 = coordY2,
        //This variable stores temporary x axis data we update in our animation loop.
        x = x1,
        //This variable stores temporary y axis data we update in our animation loop.
        y = y1;
    
        //This function interacts with the canvas
        function animateLineDrawing() {
            //This variable creates the loop for when the game ends it restarts.
            const animationLoop = requestAnimationFrame(animateLineDrawing);
            //This method clears content from the last loop iteration.
            c.clearRect(0, 0, 608, 608);
            //This method starts a new path.
            c.beginPath();
            //This method moves us to a starting point for our line.
            c.moveTo(x1, y1);
            //This method indicates the end point in our line.
            c.lineTo(x, y);
            //This method set the width of our line.
            c.lineWidth = 10;
            //This method sets the color of our line.
            c.strokeStyle = 'rgba (70, 255, 33, .8)';
            //This method draws out everything we laid out above.
            c.stroke();
            //This condition checks to see if we've reached the end point.
            if (x1 <= x2 && y1 <= y2) {
                //This condition adds 10 to the previous end x point.
                if (x < x2) {x += 10;}
                //This condition adds 10 to the previous end y point.
                if (y < y2) {y += 10;}
                //This condition cancels our animation loop if reach the end points
                if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
            }
            //This condition is similar to the one above.
            //It was necessary for the 6, 4, 2 win condition.
            if (x1 <= x2 && y1 >= y2) {
                if (x < x2) {x += 10;}
                if (y > y2) {y -= 10;}
                if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop);}
            }
        }
        //This function clear our canvas after our win line is drawn.
        function clear() {
            //This line starts our animation loop.
            const animationLoop = requestAnimationFrame(clear);
            //This line clears our canvas.
            c.clearRect(0, 0, 608, 608);
            //This line stops our animation loop.
            cancelAnimationFrame(animationLoop);
        }
        //This line disallows clicking while the win sound is playing
        disableClick();
        //This line plays the win sounds
        audio('./media/winGame_2.mp3');
        //This line calls our main animation loop.
        animateLineDrawing();
        //This line waits 1 second
        //Then, clears canvas, resets the game, and allows clicking again
        setTimeout(function() { clear (); resetGame(); }, 1000);

}

//This function resets the game in a tie or a win.
function resetGame() {
    //This for loop iterates through each HTML square element.
    for (let i = 0; i < 9; i++) {
        //This variable gets the html element of i.
        let square = document.getElementById(String(i));
        //This removes our elements backgroundImage.
        square.style.backgroundImage = "";
    }
    //This resets our array so it is empty and we can start over.
    selectedSquares = [];
}