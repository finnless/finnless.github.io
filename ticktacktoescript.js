var char = 'X';
var gameOver = false;

//THis function handles the onclick event
function turn(location) {

  if(document.getElementById(location).innerHTML == '' &&
      gameOver == false) {
      document.getElementById(location).innerHTML = char;

      //switch between X and O
      if (char == 'X') {
        char = 'O';
      }
      else{
        char = 'X';
      }

      //update results div with feedback
      document.getElementById("results").innerHTML = "It's " + char + "'s turn!"
      //check for winner after turn
      checkWinner();
  }


}

//checks for winner
function checkWinner(){

  //grab HTML of each tic tac toe div (which holds X or O)
  var r1c1 = document.getElementById("r1c1").innerHTML;
  var r1c2 = document.getElementById("r1c2").innerHTML;
  var r1c3 = document.getElementById("r1c3").innerHTML;
  var r2c1 = document.getElementById("r2c1").innerHTML;
  var r2c2 = document.getElementById("r2c2").innerHTML;
  var r2c3 = document.getElementById("r2c3").innerHTML;
  var r3c1 = document.getElementById("r3c1").innerHTML;
  var r3c2 = document.getElementById("r3c2").innerHTML;
  var r3c3 = document.getElementById("r3c3").innerHTML;

  if(((r1c1 == r1c2) && (r1c1 == r1c3) && r1c1 != '') ||
    ((r2c1 == r2c2) && (r2c1 == r2c3) && r2c1 != '') ||
    ((r3c1 == r3c2) && (r3c1 == r3c3) && r3c1 != '') ||
    ((r1c1 == r2c1) && (r1c1 == r3c1) && r1c1 != '') ||
    ((r1c2 == r2c2) && (r2c2 == r3c2) && r1c2 != '') ||
    ((r1c3 == r2c3) && (r1c3 == r3c3) && r1c3 != '') ||
    ((r1c1 == r2c2) && (r1c1 == r3c3) && r1c1 != '') ||
    ((r1c3 == r2c2) && (r3c1 == r3c1) && r1c3 != '')){

    //alert("Winner Winner Chicken Dinner!");

    //game is over now
    gameOver = true;

    //switch between X and O
    if (char == 'X') {
      char = 'O';
    }
    else{
      char = 'X';
    }

    //update results div
    document.getElementById("results").innerHTML = char + " wins!";
  }

}



function clearAll() {
  document.getElementById('r1c1').innerHTML = "";
  document.getElementById('r1c2').innerHTML = "";
  document.getElementById('r1c3').innerHTML = "";
  document.getElementById('r2c1').innerHTML = "";
  document.getElementById('r2c2').innerHTML = "";
  document.getElementById('r2c3').innerHTML = "";
  document.getElementById('r3c1').innerHTML = "";
  document.getElementById('r3c2').innerHTML = "";
  document.getElementById('r3c3').innerHTML = "";
  char = 'X';
  //update results div with feedback
  document.getElementById("results").innerHTML = "It's " + char + "'s turn!"
  //reset gameOver
  gameOver = false;
}
