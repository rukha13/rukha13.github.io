var happy = document.getElementById("img_happy");
var sad = document.getElementById("img_sad");
var back = document.getElementsByClassName("mood")[0];
var my_mood = document.getElementsByClassName("my-mood")[0];
let myButton = document.getElementById("my-button");

let i = 0;

function changeMood() {
  if (i == 0) {
    happy.style.display = "none";
    sad.style.display = "block";
    myButton.innerHTML = "Sad";
    myButton.style.color = "white";
    back.style.backgroundColor = "#0036a2";
    my_mood.style.color = "#ffffff";
    i += 1;
  } else {
    sad.style.display = "none";
    happy.style.display = "block";
    myButton.innerHTML = "Happy";
    myButton.style.color = "black";
    back.style.backgroundColor = "#2AF598";
    my_mood.style.color = "#008571";
    i -= 1;
  }
  console.log(i);
}
