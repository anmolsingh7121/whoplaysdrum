var numberOfButtons = document.querySelectorAll(".drum").length; // taking the number of buttons


//checking if a button is pressed 

for(var i = 0; i<document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener('click', function(){
    console.log(this)
    playAudio(this.innerHTML.toLowerCase())
  })
}

//checking if a key is pressed 

document.addEventListener("keydown", function(event){
  console.log(event)
  playAudio(event.key.toLowerCase());
});


// function to play sound according to the button or key pressed 

function playAudio(key){

switch(key){
  case "w":
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
    break;

  case "a":
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
    break;

  case "s":
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
    break;

  case "d":
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
    break;

  case "j":
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
    break;

  case "k":
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
    break;

  case "l":
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
    break;

    default:
      console.log(key)

}
}