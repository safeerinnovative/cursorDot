// BALL 1

gsap.set(".ball", {xPercent: -50, yPercent: -50});

const ball = document.querySelector(".ball");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.75;

const xSet = gsap.quickSetter(ball, "x", "px");
const ySet = gsap.quickSetter(ball, "y", "px");

window.addEventListener("mousemove", e => {    
  mouse.x = e.x;
  mouse.y = e.y;  
});

gsap.ticker.add(() => {
  
  // adjust speed for higher refresh monitors
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
  
  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
});

// BALL 2

gsap.set(".ball2", {xPercent: -50, yPercent: -50});

const ball2 = document.querySelector(".ball2");
const pos2 = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse2 = { x: pos2.x, y: pos2.y };
const speed2 = 0.75;

const xSet2 = gsap.quickSetter(ball2, "x", "px");
const ySet2 = gsap.quickSetter(ball2, "y", "px");

window.addEventListener("mousemove", e => {    
  mouse2.x = e.x;
  mouse2.y = e.y;  
});

gsap.ticker.add(() => {
  
    // adjust speed for higher refresh monitors
    const dt = 0.3 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
    
    pos2.x += (mouse2.x - pos2.x) * dt;
    pos2.y += (mouse2.y - pos2.y) * dt;
    xSet2(pos2.x);
    ySet2(pos2.y);
  });