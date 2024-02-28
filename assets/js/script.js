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
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    window.location.href = "thankyou.html";
  });