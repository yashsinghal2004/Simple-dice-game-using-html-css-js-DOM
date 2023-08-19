var randomnum1=Math.floor((Math.random()*6)+1);
var randomimage="dice"+randomnum1+".png";
var randomimagesourse="images/"+randomimage;
var img1=document.querySelectorAll("img")[0].setAttribute("src",randomimagesourse);

var randomnum2=Math.floor((Math.random()*6)+1);
var randomimage2="dice"+randomnum2+".png";
var randomimagesourse2="images/"+randomimage2;
var img2=document.querySelectorAll("img")[1].setAttribute("src",randomimagesourse2);
if(randomnum2>randomnum1){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else if(randomnum2<randomnum1){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
