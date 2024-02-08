let hamburgerIcon = document.getElementById('hamburger_icon');
let crossIcon = document.getElementById('close-icon')
let header = document.getElementById('header');

hamburgerIcon.addEventListener('click',()=>{
    header.classList.toggle('active')
});

crossIcon.addEventListener('click',()=>{
    header.classList.toggle('active')
})


// Heart
const hearts = document.querySelectorAll(".heart");

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    const heartPath = heart.querySelector(".heart-path");
    if (heartPath.classList.contains("heart-solid")) {
        // Heart is solid, toggle to outline
        heartPath.classList.remove("heart-solid");
        heartPath.classList.add("heart-outline");
      } else {
        // Heart is not solid, toggle to solid
        heartPath.classList.remove("heart-outline");
        heartPath.classList.add("heart-solid");
      }

    const currentStroke = heartPath.getAttribute("stroke");
    const currentFill = heartPath.getAttribute("fill");
       
  });
});






// Card Number Counting
let numberSec = document.getElementById('numberCount');
const counter = document.querySelectorAll('.counter');
let speed = 1;
let target_count;

// Add a flag to check if counting has started
let hasStartedCounting = false;

window.onscroll = function () {
  if (!hasStartedCounting && window.scrollY >= numberSec.offsetTop) {
    counter.forEach((myCount) => {
      let target_count = myCount.dataset.count;
      let init_count = 0; // Start from 0 or your desired initial value

      let updateCount = () => {
        init_count = init_count + speed;
        myCount.innerText = init_count;
        if (init_count < target_count) {
          setTimeout(() => {
            updateCount();
          }, 50);
        }
      }

      updateCount();
    });

    hasStartedCounting = true; // Set the flag to true to avoid counting again
  }
}








