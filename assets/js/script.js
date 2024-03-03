/*jshint esversion: 6 */

let angleArray = [
    [0, 0, 0],
    [-300, -342, -38],
    [-410, -320, -2],
    [130, -217, -80],
    [-204, -317, 5],
    [-47, -219, -81],
    [-130, -370, -53]
  ];

// nav menu hamburger function 
let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// bring users to thankyou.html when form submit button is pressed 
document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            window.location.href = "thankyou.html";
        });
    } else {
        console.error("Element with ID 'contact-form' not found.");
    }
});

// dice roll function
let cube = document.getElementById('cube');

angleArray = [[0,0,0],[-300,-342,-38],[-410,-320,-2],[130,-217,-80],[-204,-317,5],[-47,-219,-81],[-130,-370,-53]];

cube.addEventListener('click',function(){

    let randomAngle = Math.floor(Math.random() * 6) +1;
    //console.log(randomAngle);
    cube.style.transform = 'rotateX('+angleArray[randomAngle][0]+'deg) rotateY('+angleArray[randomAngle][1]+'deg) rotateZ('+angleArray[randomAngle][2]+'deg)';
    cube.style.transition = '1s linear';
});

