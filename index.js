var happy = document.getElementById("img_happy")
var sad = document.getElementById("img_sad")
let myButton = document.getElementById("my-button")

let i = 0;


function changeMood(){
  if (i == 0){
    happy.style.display = "none";
    sad.style.display = "block";
    myButton.innerHTML = "Sad";
    i += 1;
  }
  else{
    sad.style.display = "none";
    happy.style.display = "block";
    myButton.innerHTML = "Happy";
    i -= 1;
  }
  console.log(i);
}

