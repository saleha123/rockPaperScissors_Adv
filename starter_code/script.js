var userPoint = 0;
var aiPoint = 0;

function getAISelection() {
var random_num = Math.random() * 3;
var rock_side = Math.floor(random_num + 1);
  
var comp_choice;
if(rock_side==3){
  comp_choice="rock";
}

else if(rock_side==2){
  comp_choice="paper";
}
 
else if(rock_side==1){
  comp_choice="scissors";
}
  return(comp_choice); 
}

function pickWinner(comp_choice, user_choice) {
 if (comp_choice === "rock" && user_choice === "paper"){
   return "user";
 }
   else if(comp_choice === "paper" && user_choice === "scissors"){
     return "user";
   }
else if(comp_choice === "scissors" && user_choice === "rock"){
  return "user";
   }
   else if(comp_choice === "rock" && user_choice === "rock"){
  return "draw";
   }
   else if(comp_choice === "paper" && user_choice === "paper"){
  return "draw";
   }
   else if(comp_choice === "scissors" && user_choice === "scissors"){
  return "draw";
   }
   else if(comp_choice === "paper" && user_choice === "rock"){
  return "api";
   }
   else if(comp_choice === "scissros" && user_choice === "paper"){
  return "api";
   }
   else if(comp_choice === "rock" && user_choice === "scissors"){
  return "api";
   }
}
// this function set the score 
function setScore(){
    
}
    

// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    alert(userValue);
    var aiValue = getAISelection();
    

    var winner = pickWinner(userValue, aiValue);

    if ( 'user' === winner ) {
        $('#message').delay(50).text('You have won!, Click a box to play again');
    } else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost!, Click a box to play again');
    }
}

// This function runs on page load
$(document).ready(function(){
    alert('sanity')
    $('.token'). click( function(e) {
        evaluate(e);
    });
    
});    
        
        
    

