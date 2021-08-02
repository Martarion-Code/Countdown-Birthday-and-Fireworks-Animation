'use strict';

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']


addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})



const gravity = 0.01;
const friction = 0.99;

// Particles
class Particle {
  constructor(x, y, radius, color, velocity) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.velocity = velocity;
    this.alpha = 1;
  }

  draw() {
    c.save()
    c.globalAlpha = this.alpha;
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
    c.restore();
  }

  update() {
    this.draw()
    this.velocity.y *= friction;
    this.velocity.x *= friction;
    this.velocity.y += gravity;
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.alpha -= 0.005;
  }
}

let projectiles = [];
let acceleration = 1.015;
class Firework{
  constructor(x, y, radius,  color, velocity){
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.velocity = velocity;

  }

  draw(){
      c.beginPath();
      c.arc(this.x, this.y, this.radius, Math.PI*0, Math.PI*2, false);
      // c.moveTo(this.x, this.y );
      // c.lineTo(this.x, this.y + 5);
      // c.lineWidth = 5;
      // c.strokeStyle = this.color;
      // c.stroke();
      c.fillStyle = this.color;
      c.fill();
      c.closePath();

  }

  update() {
      this.draw();
      this.x +=  this.velocity.x * acceleration;
      this.y +=   this.velocity.y * acceleration;
      // this.velocity.x *= acceleration;
      // this.velocity.y *= acceleration;

  }

}



// Implementation
let particles;
function init() {
  particles = []

 
}

// let x;
// let y;

// setInterval(() =>{
//    x = randomIntFromRange(200, innerWidth - 200)
//    y =  randomIntFromRange(50, innerHeight - 100)
//   const angle = Math.atan2(y - canvas.height / 2, x - canvas.width / 2);
//   const angle2 = Math.atan2(y - canvas.height + 100, x - canvas.width /2 );

//   // console.log('____________________________')

//   // console.log(`this is angle : ${angle}`);

//   // console.log(`e.clientY : ${e.clientY}` )
//   // console.log(`e.clientX : ${e.clientX}` )
//   // console.log(`canvas.height / 2 : ${ canvas.height / 2}` )
//   // console.log(`canvas.width / 2: ${ canvas.width / 2}` )
//   // console.log(`e.clientY - canvas.height / 2 : ${e.clientY - canvas.height / 2}` )
//   // console.log(`e.clientX - canvas.width / 2: ${e.clientX - canvas.width / 2}` )
  
//   // console.log(`e.clientY - canvas.height - 100: ${e.clientX - canvas.width / 2}` )
//   // console.log(`e.clientX - canvas.width / 2: ${e.clientX - canvas.width / 2}` )
//   // console.log(`this is angle2 : ${angle2}` )

//   const velocity = {
//     x: Math.cos(angle2),
//     y: Math.sin(angle2),
//   }

//   projectiles.push(new Firework(
//     canvas.width / 2, 
//     canvas.height + 100,
//     3,
//     'red',
//     velocity)
//   );


//   if(distanceOfTime < 0){
//     // mouse.x = event.clientX
//     // mouse.y = event.clientY
//     const particleCount = 100;
//     const angleIncrement = (Math.PI * 2) / particleCount;
//     const power = 7;

//     // console.log(Math.cos(angleIncrement * 32));
//     for (let i = 0; i < particleCount; i++) {
//       particles.push(new Particle(x, y, 5, `hsl(${Math.random() * 360}, 50%, 50%)`, {
//         x:Math.cos(angleIncrement * i) * Math.random() * power,
//         y:Math.sin(angleIncrement * i) * Math.random() * power,
//       }));
//       // console.log(Math.cos(angleIncrement * i));
//     }
//   }

// }, 2000)

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.fillStyle = `rgba(0, 0, 0, 0.05)`
  c.fillRect(0, 0, canvas.width, canvas.height)
  // ctx.clearRect(0,0,canvas.width, canvas.height);
  particles.forEach((particle, i) => {
   
    if(particle.alpha > 0){
      particle.update()
    }else{
      particles.splice(i, 1)
    }

  })


  // projectiles.forEach((projectile, i) =>{
  //   projectile.update();

  //   console.log(x, y)

  //   console.log(`this is x : ${x}`);
  //   console.log(`this is projectile.x:  ${projectile.x}`);

  //   const dist = Math.hypot(x - projectile.x, y - projectile.y);


  //   console.log(`this is distance : ${dist}`);
  //   if(dist - projectile.radius < 0){
  //     console.log('GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG')
     

  
  //})



}

init()
animate()
// const x = randomIntFromRange(200, innerWidth - 200)
// const y =  randomIntFromRange(50, innerHeight - 100)

setInterval(() =>{
  if(distanceOfTime < 0){
    // mouse.x = event.clientX
    // mouse.y = event.clientY
    let x, y;

    if(innerWidth <= 768){
       x = randomIntFromRange(50, innerWidth - 50)
       y =  randomIntFromRange(25, innerHeight - 25)
      
    }else{
       x = randomIntFromRange(200, innerWidth - 200)
       y =  randomIntFromRange(50, innerHeight - 100)
      
    }
    const particleCount = 100;
    const angleIncrement = (Math.PI * 2) / particleCount;
    const power = 7;

    // console.log(Math.cos(angleIncrement * 32));
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(x, y, 5, `hsl(${Math.random() * 360}, 50%, 50%)`, {
        x:Math.cos(angleIncrement * i) * Math.random() * power,
        y:Math.sin(angleIncrement * i) * Math.random() * power,
      }));
      // console.log(Math.cos(angleIncrement * i));
    }
  }
}, 2000)


/**Utils */
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
  }
  
  function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1
  
    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
  }
  


// addEventListener('click', (e)=>{
