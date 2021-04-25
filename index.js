var randomNumber1=Math.floor(Math.random()*6)+1;
var newImgSrc1="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",newImgSrc1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var newImgSrc2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",newImgSrc2);

if(randomNumber1>randomNumber2)
{
  document.querySelector(".main-heading").textContent="🚩Player 1 Wins";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector(".main-heading").textContent="Player 2 Wins🚩";
}
else{
  document.querySelector(".main-heading").textContent="Draw!";
}
