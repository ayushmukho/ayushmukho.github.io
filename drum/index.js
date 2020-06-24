
var numberOfDrumButton = document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButton;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function(){

  var buttonInnerHTML = this.innerHTML;
   makeSound(buttonInnerHTML);

   buttonAnimation(buttonInnerHTML);

 });

}


addEventListener("keydown",function(event){

   makeSound(event.key);

   buttonAnimation(event.key);

});

function makeSound(key){
    switch (key) {
        case "w":
        var tom1 = new Audio("sounds/tom-1.mp3"); //new audio is already ther in java
        tom1.play();
        break;

        case "a":
        var tom2 = new Audio("sounds/tom-2.mp3"); //new audio is already ther in java
        tom2.play();
        break;

        case "s":
        var tom3 = new Audio("sounds/tom-3.mp3"); //new audio is already ther in java
        tom3.play();
        break;

        case "d":
        var tom4 = new Audio("sounds/tom-4.mp3"); //new audio is already ther in java
        tom4.play();
        break;

        case "j":
        var snare = new Audio("sounds/snare.mp3"); //new audio is already ther in java
        snare.play();
        break;

        case "k":
        var crash = new Audio("sounds/crash.mp3"); //new audio is already ther in java
        crash.play();
        break;

        case "l":
        var kick = new Audio("sounds/kick-bass.mp3"); //new audio is already ther in java
        kick.play();
        break;

        default: console.log()

    }

}

function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
      activeButton.classList.remove("pressed");

  }, 100);

}
