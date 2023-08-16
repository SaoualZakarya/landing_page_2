// open and close the mega-menu
let childLinks = document.getElementsByClassName("mega-menu");
let lastLink = document.getElementsByClassName("lastSpecial")[0];
let isOpen = false;
lastLink.addEventListener("click", () => {
  isOpen = !isOpen;
  for (let i = 0;; i++) {
    childLinks[i].style.zIndex = isOpen ? "100" : "-1";
  }
});
// create the countdown fot the event
            // the date of the events
let countDownDate = new Date("Sep 10, 2023 08:00:00").getTime();

let counter = setInterval(()=>{
  let dateNow = new Date().getTime();
  // calculate the time still for the event
  let distance = countDownDate - dateNow;
  // the days 
  let days = Math.floor(distance / (1000 * 60 * 60 *24)) 
  document.querySelector(".days").innerHTML = days < 10? `0${days}` : days ;
  // the hours
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24))/(1000 * 60 * 60)) 
  document.querySelector(".hours").innerHTML = hours < 10? `0${hours}` : hours ;
  // the minutes
  let minutes = Math.floor((distance % (1000 * 60 * 60))/(1000 * 60)) 
  document.querySelector(".minutes").innerHTML = minutes < 10? `0${minutes}` : minutes ;
  // the seconds
  let seconds = Math.floor((distance % (1000 * 60))/1000 ) 
  document.querySelector(".seconds").innerHTML = seconds < 10? `0${seconds}` : seconds;

  if (distance < 0 ){
  clearInterval(counter);

  }

},1000)

// create counter when scrolling and animate progress

let progressSpans = document.querySelectorAll(".the-progress span");
let section1 = document.getElementById("ourSkills");

let numbers = document.querySelectorAll(".stats .number");
let section = document.querySelector(".stats .container");
let started = false;

window.onscroll = function () {
  // animate the progress
  if (window.scrollY >= section1.offsetTop + 100 ) {
    progressSpans.forEach((el) => (el.style.width = el.dataset.width));
  }
  // increase counter
  if (window.scrollY >= section.offsetTop +100) {
    if (!started) {
      numbers.forEach((el) => startCount(el));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}












