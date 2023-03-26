"use strict";

$(document).ready( () => {

    //Creates random number for the users to guess
    var targetNum = Math.floor(Math.random() * 101);
    //Fields to keep track of the number of guesses each user has done.
    var p1Count = 0;
    var p2Count = 0;

    $("#submit").click( function() {

        //Variables to store the data from the forms
        var player1Name = document.getElementById("player1Name").value;
        var player2Name = document.getElementById("player2Name").value;
        var player1Number = document.getElementById("player1Guess").value;
        var player2Number = document.getElementById("player2Guess").value;

        //Checks to make sure the user entered valid information. If so continues to check guess validity
        //If not displays an error message to the user telling them to enter proper information
        if ((typeof player1Name === "string") && (player1Name.length > 0) && (player1Number > 0 )) {

            //If the information was correct. Checks to see if the number was equal to the random num, less than, or greater too
            if (player1Number == targetNum) {
                alert("Congratulations " + player1Name + ". You won! It took you" + p1Count + " guesses to find the correct number. Please reset the game if you would like to play again!");
                p1Count += 1;
            }
            else if (player1Number > targetNum) {
                $("#p1NameError").text("Player 1 your guess was greater then the random number.");
                p1Count += 1;
            }
            else if (player1Number < targetNum) {
                $("#p1NameError").text("Player 1 your guess was less then the random number.");
                p1Count += 1;
            }
        }
        else {
            $("#p1NameError").text("Player 1 please enter a name and a number between 1 and 100.")
        }

        //Checks to make sure the user entered valid information. If so continues to check guess validity
        //If not displays an error message to the user telling them to enter proper information
        if(typeof player2Name === "string" && (player2Name.length > 0) &&  (player2Number > 0)) {

            //If the information was correct. Checks to see if the number was equal to the random num, less than, or greater too
            if (player2Number == targetNum) {
                alert("Congratulations " + player2Name + ". You won! It took you" + p2Count + " guesses to find the correct number. Please reset the game if you would like to play again!");
                p2Count += 1;
            }
            else if (player2Number > targetNum) {
                $("#p2NameError").text("Player 2 your guess was greater then the random number.");
                p2Count += 1;
            }
            else if (player2Number < targetNum) {
                $("#p2NameError").text("Player 2 your guess was less then the random number.");
                p2Count += 1;
            }
        }
        else {
            $("#p2NameError").text("Player 2 enter a name and a number between 1 and 100.")
        }
    });
    //Reset button will reset all data in the form so the users can play again.
    $("#reset").click( function() {
        targetNum = Math.floor(Math.random() * 101);
        $("#p1NameError").text("");
        $("#p2NameError").text("");
        document.getElementById("player1Name").value = "";
        document.getElementById("player2Name").value = "";
        document.getElementById("player1Guess").value = "";
        document.getElementById("player2Guess").value = "";
    });
});
