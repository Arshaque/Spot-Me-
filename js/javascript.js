var numberOfFaces = 2;
var score=0;
var theBody = document.getElementsByTagName("body")[0];
var answer = Math.floor((Math.random() * 10 )+ 1);
var TheRightSide = document.getElementById("TheRightSide");
var spotimg = document.getElementById("SpotImage");
var TheLeftSide = document.getElementById("TheLeftSide");
var toptop = 0;
var leftleft = 0;
function start_game () {
     scorechange();
     genq();
     generatefaces();
     generateanswer();
     var timeout = setTimeout(function(){alert("Time out"); alert("Your score: "+score); removeimages();alert("refreshing the page!");reset();},10000);
     TheRightSide.lastChild.onclick = function corretanswer(event) {
          event.stopPropagation();  
          score=(numberOfFaces/2)*5;
          clearTimeout(timeout);
          removeimages();
          numberOfFaces += 2;
          start_game();
     }
     TheRightSide.onclick = function gameover() {
     alert ("Game Over!");
     alert("Your score: "+score);
     removeimages();
     alert("refreshing the page!");
     theBody.onclick = null;
     reset();
     }
}


function removeimages(){
     while (spotimg.firstChild)
          spotimg.removeChild(spotimg.firstChild);
     while (TheRightSide.firstChild)
          TheRightSide.removeChild(TheRightSide.firstChild);
}


function removestartbutton(){
     var strim = document.getElementById("startbtn");
     TheLeftSide.removeChild(strim);
     alert("you have only 10 secongs each level");
     start_game();
}


function scorechange(){
        document.getElementById("scoreboard").innerHTML="Score: "+score;
}


function topindex () {
    toptop = Math.random () * 400;
    var toptop_px = (toptop )+ "px";
    return toptop_px;
}


function leftindex(){
    leftleft = Math.random () * 700;
    var leftleft_px = (leftleft ) + "px";
    return leftleft_px;
}

/*function generateanswer(){
    var emoji = document.createElement("img");
    emoji.src = "./images/smileys/"+answer+".png";
    TheRightSide.appendChild (emoji);
    TheRightSide.lastChild.style.left = leftindex () ;
    TheRightSide.lastChild.style.top = topindex () ;
    var spotimage = document.getElementById("SpotImage");
    spotimage.appendChild(emoji);
}*/


function generateanswer(){
    var emoji = document.createElement("img");
    emoji.src = "./images/smileys/"+answer+".png";
    spotimg.appendChild(emoji);
    spotimg.lastChild.style.left = "300px";
    spotimg.lastChild.style.top = "300px";
    
}


function genq() {
    answer=Math.floor((Math.random()*10)+1);
   // return answer;
}


function generatefaces() {
    for (i=0; i <= numberOfFaces; i++) {
        var randomimage = Math.floor((Math.random() * 10)+1);
        var faceimage = document.createElement("img");
        if(randomimage != answer){
            faceimage.src = "./images/smileys/"+randomimage+".png";
            TheRightSide.appendChild (faceimage);
            TheRightSide.lastChild.style.left = leftindex () ;
            TheRightSide.lastChild.style.top = topindex () ;
            
        }      
        
    }
    faceimage.src = "./images/smileys/"+answer+".png";
    TheRightSide.appendChild (faceimage);
    TheRightSide.lastChild.style.left = leftindex () ;
    TheRightSide.lastChild.style.top = topindex () ;
}


function reset(){
    window.location.reload();
}