var ran1= Math.floor(Math.random()*6)+1;
var ran2= Math.floor(Math.random()*6)+1;
var path1= "images/dice"+ran1+".png";
var path2= "images/dice"+ran2+".png";
var img1= document.querySelectorAll("img")[0];
var img2= document.querySelectorAll("img")[1];
img1.setAttribute("src",path1);
img2.setAttribute("src",path2);
if(ran1>ran2)
document.querySelector("h1").innerHTML="PLAYER 1 WINS";
else if(ran2>ran1)
document.querySelector("h1").innerHTML="PLAYER 2 WINS";
else
document.querySelector("h1").innerHTML="DRAW!!";
