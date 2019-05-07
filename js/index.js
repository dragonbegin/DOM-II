// Your code goes here


//Sign Me Up! Button

//Try the commented code below to see functionality on first button when click!

// const button = document.querySelector(".btn");

// button.addEventListener("mouseover", (event) => {
//   event.target.textContent = "Click Me!";
// })

// button.addEventListener('click', (event) => {

//   const content = document.querySelectorAll('.content-section');
//       content.forEach(function(item) {
//         event.target.textContent = 'BOOM!';
//   });

//   setTimeout(function() {
//       content.forEach(function(item) {
//         event.target.textContent = 'You Dead!';
//       });
//   }, 1000);

// }, false);

// document.querySelectorAll('a').addEventListener('click', (event) => {
//   event.target.style.color = "red";
// });

let changeBtn = document.querySelectorAll('.btn');
changeBtn[0].addEventListener('mouseover', (event) => {
    event.target.textContent = 'Boom!';
    setTimeout(function() {
        event.target.textContent = 'Sign Me Up!';
    }, 2000);
}, false);

changeBtn[1].addEventListener('mouseover', (event) => {
    event.target.textContent = 'Boom!';
    setTimeout(function() {
        event.target.textContent = 'Sign Me Up!';
    }, 2000);
}, false);

changeBtn[2].addEventListener('mouseover', (event) => {
    event.target.textContent = 'Boom!';
    setTimeout(function() {
        event.target.textContent = 'Sign Me Up!';
    }, 2000);
}, false);

// Intro Text

const intro = document.querySelector('.intro h2');
intro.addEventListener('mouseover', () => {
	intro.style.color = 'Cyan';
});

intro.addEventListener('mouseout', () => {
	intro.style.color = 'black';
});

//Nav Bar

let navLinks = document.querySelectorAll(".nav a");
navLinks[0].addEventListener("contextmenu", (event) => {
  event.preventDefault(); 

  event.target.style.color = "red";
});
navLinks[1].addEventListener("contextmenu", (event) => {
  event.preventDefault();
  event.target.style.color = "red";
});
navLinks[2].addEventListener("contextmenu", (event) => {
  event.preventDefault();
  event.target.style.color = "red";
});
navLinks[3].addEventListener("contextmenu", (event) => {
  event.preventDefault();
  event.target.style.color = "red";
});

//footer

let footer = document.querySelector("footer");
footer.addEventListener("wheel", (event) => {
  event.target.style.backgroundColor = "Cyan";
});

// doubleclick

let letsGo = document.querySelector(".content-section h2");
letsGo.addEventListener("dblclick", (event) => {
  event.stopPropagation();
  event.target.style.opacity = 0.5;
});

// Keydown

let container = document.querySelector("body");
container.addEventListener("keydown", (event) => {
  event.target.style.backgroundColor = "lightCyan";
});

//Header

let header = document.querySelector(".main-navigation");
header.addEventListener("mousedown", (event) => {
  event.target.style.backgroundColor = "Cyan";
});

