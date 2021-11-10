let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

function drawCircle(x, y, size) {
    ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(x, y, size, 0, 2 * Math.PI);
ctx.fill();
}

let x = 50;
let y = 50;
let size = 30;

drawCircle(x, y, size);

// Add your code here

window.addEventListener('keydown', function changePosition(e){
switch(e.key) {
case 'a':
  x -= 2;
  size--;
  
  break;
case 'd':
  x += 2;
  size++;
  break;
case 'w':
  y -= 2;
  size--;
  break;
case 's':
  y += 2;
  size++;
  break;
}

drawCircle(x, y, size);
});
// document.addEventListener('keydown', function changePosition (event) {

//   if (event.keyCode === 87) {

//       y -= 10;
   
   
//   } else if (event.keyCode === 83 ) {    

//       y += 10;

//   } else if (event.keyCode === 65) {

//       x -= 10;


//   } else if (event.keyCode === 68) {

//       x += 10;

//   } else {

//       x = x

//   } 

// drawCircle(x, y, size);

// }

// );
