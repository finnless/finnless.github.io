var list = ["https://i.imgur.com/M7JqWp1.jpg", "https://i.redd.it/zbpszcphju101.jpg", "https://i.redd.it/0yq1u44vcw101.jpg", "https://i.imgur.com/7adqsLr.jpg", "https://i.redd.it/bqjvrehhmkhz.jpg"]
var Pic = 0;


function load(){

  document.getElementById("canvas").src=list[Pic];

}



function goLeft(){
Pic = Pic + 1;
load()
}

function goRight(){
Pic = Pic + 1;
load()
}
