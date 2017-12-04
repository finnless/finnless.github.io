//draws random circle in clickPanel
function randomCircle(){

    //randomly get the top positions
    document.getElementById("circle").style.top = randomNum();

    //randomly get left positions
    document.getElementById("circle").style.left = randomNum();


}


//handles onclick event
//when a random circle is clicked in clickPanel, it disappears
//then generates a new randomCircle
function clickCircle(){
    //generate random circle
    randomCircle();
}


//random number
function randomNum(){
    return Math.floor(Math.random() * 501);
}
