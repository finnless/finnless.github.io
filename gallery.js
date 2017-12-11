var list = ["https://i.imgur.com/M7JqWp1.jpg",
"https://i.imgur.com/7adqsLr.jpg",
"https://i.redd.it/bqjvrehhmkhz.jpg",
"https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?h=350&auto=compress&cs=tinysrgb",
"https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/25011185_1992221364381747_834165382838222848_n.jpg",
"https://scontent-lax3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/24332040_391326191295875_6718900675830349824_n.jpg", "https://media.giphy.com/media/SxXKRsI6QG3nO/giphy.gif"]
var Pic = 0;
var length = list.length;

function load(){

  document.getElementById("canvas").src = list[Pic];

}



function goLeft(){
  if (Pic>0){
    Pic = Pic - 1;
  } else {
    Pic = length;
  }
  load();
}

function goRight(){
  if (Pic<length){
    Pic = Pic + 1;
    load()
  } else {
    Pic = 0;
  }
  load();
}
