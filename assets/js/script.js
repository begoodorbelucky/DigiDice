// nav menu hamburger function 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", (event) => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

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

angleArray = [[0,0,0],[-310,-362,-38],[-400,-320,-2],[135,-217,-88],[-224,-317,5],[-47,-219,-81],[-133,-360,-53]];

cube.addEventListener('click',function(){

    const randomAngle = Math.floor(Math.random() * 6) +1;
    //console.log(randomAngle);
    cube.style.transform = 'rotateX('+angleArray[randomAngle][0]+'deg) rotateY('+angleArray[randomAngle][1]+'deg) rotateZ('+angleArray[randomAngle][2]+'deg)';
    cube.style.transition = '1s linear'
});

