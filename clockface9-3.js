"use strict"

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Coding Challenge 3

   Clock Face
   Author: Ethan Jay
   Date:   05/26/2023


*/





/* ------------------------------------------------

   The rotateHand() using the transform style to rotate the hand
   image by a specified angle
*/

function rotateHand(angle, hand) {
   document.getElementById(hand).style.transform = "rotate(" + angle + "deg)";
}


function moveHands() {
  // Get the current date and time
  var nowTime = new Date();


  // Extract the seconds, minutes, and hours from the current time
  var nowSeconds = nowTime.getSeconds();
  var nowMinutes = nowTime.getMinutes();
  var nowHours = nowTime.getHours();


  // Calculate the angle for the second hand
  var secondsAngle = nowSeconds * 6;


  // Calculate the angle for the minute hand
  var minutesAngle = nowMinutes * 6 + nowSeconds / 10;


  // Calculate the angle for the hour hand
  var hoursAngle = nowHours * 30 + nowMinutes / 2;


  // Rotate the hands of the clock
  rotateHand(secondsAngle, "seconds");
  rotateHand(minutesAngle, "minutes");
  rotateHand(hoursAngle, "hours");
}


// Run the moveHands() function every second
setInterval(moveHands, 1000);
