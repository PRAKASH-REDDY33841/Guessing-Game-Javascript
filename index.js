let userInput = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");
let randomNumber = Math.ceil(Math.random()*100);
console.log(randomNumber);
function checkGuessButton(){
     if(parseInt(userInput.value) === randomNumber){
         gameResult.textContent = "Congratulations! You got it right.";
         gameResult.style.backgroundColor = "green";
     }else if(parseInt(userInput.value) < randomNumber){
            gameResult.textContent = "Too Low! Try Again.";
         gameResult.style.backgroundColor = "#1e217c";
     }else if(parseInt(userInput.value) > randomNumber){
         gameResult.textContent = "Too High! Try Again.";
         gameResult.style.backgroundColor = "#1e217c";
     }else{
            gameResult.textContent = "Please enter a valid number between 1 and 100.";
             gameResult.style.backgroundColor = "red";
     }
}