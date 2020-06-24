


//12. At the top of the game.js file, create a new empty array with the name userClickedPattern.

var userClickedPattern = [];
//3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
var buttonColours = ["red", "blue", "green", "yellow"]
//5. At the top of the game.js file, create a new empty array called gamePattern.
var gamePattern = [];
//1. Inside game.js create a new function called nextSequence()
//21You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.

var started = false;

var level = 0;

function nextSequence() {
    //28. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.

    userClickedPattern = [];
    //22. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
    level++;

    //23. Inside nextSequence(), update the h1 with this change in the value of level.
    $("#level-title").text("Level " + level);

    //2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
    var randomNumber = Math.floor(Math.random() * 4);
    //4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
    var randomChosenColour = buttonColours[randomNumber];
    //6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
    gamePattern.push(randomChosenColour);
    //7. Use jQuery to select the button with the same id as the randomChosenColour
    //8. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    //9. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
    //16. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.

    playSound(randomChosenColour);





}
//10. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.

$(".btn").click(function() {
    //11. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
    var userChosenColour = $(this).attr("id");
    //13. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern

    userClickedPattern.push(userChosenColour);
    //15. In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played.

    playSound(userChosenColour);

    animatePress(userChosenColour);
//24Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.

    checkAnswer(userClickedPattern.length-1);
});
//14. Create a new function called playSound() that takes a single input parameter called name
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
//17Create a new function called animatePress(), it should take a single input parameter called currentColour.

function animatePress(currentColour) {
    //18. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().

    $("#" + currentColour).addClass("pressed");
    //19. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.

    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}
//20. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().

$(document).keypress(function() {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;

    }
});
//25. Create a new function called checkAnswer(), it should take one input with the name currentLevel

function checkAnswer(currentLevel) {
//26. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern.
    if(userClickedPattern[currentLevel]==gamePattern[currentLevel]){

//27. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
        if(userClickedPattern.length == gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }

    }else{
        //28when the user is wrong then use this sound wrong
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        //29use the class game-over from the css section
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        });
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }

}

function startOver(){
    level = 0;
    started = false;
    gamePattern=[];
}
