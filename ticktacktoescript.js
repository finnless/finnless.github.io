var char = 'X';

//THis function handles the onclick event
function turn(location) {

  //switch between X and O
  if (char == 'X') {
    char = 'O';
  }
  else{
    char = 'X';
  }

  document.getElementById(location).innerHTML = char;

}

function clear() {
  document.getElementById('r1c1').innerHTML = "";
  document.getElementById('r1c2').innerHTML = "";
  document.getElementById('r1c3').innerHTML = "";
  document.getElementById('r2c1').innerHTML = "";
  document.getElementById('r2c2').innerHTML = "";
  document.getElementById('r2c3').innerHTML = "";
  document.getElementById('r3c1').innerHTML = "";
  document.getElementById('r3c2').innerHTML = "";
  document.getElementById('r3c3').innerHTML = "";

}
