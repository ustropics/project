getValues();

var tInc = 80;
var t = 0;
var timesRun = 0;
var canvas = document.getElementById('myCanvas');
var setUserHexColor = document.getElementById('userHexColor');
var posX = (canvas.width / 2);
var posY = (canvas.height / 2);
var context = canvas.getContext('2d');
var color = '#ffffff';
var strokeColor = '#ffffff';
var continueAnimating=true;

setUserHexColor.innerHTML = color;

function getUserColor(ev) {
  const color = ev.target.value;
  setUserHexColor.innerHTML = color;
  strokeColor = color.replace('#','');
}

function getValues() {
  R = document.getElementById('outerRadius').value;
  r = document.getElementById('innerRadius').value;
  O = document.getElementById('offsetPen').value;
  maxRun = document.getElementById('drawTimer').value * 100;
  if (Number(R) < Number(r)) {
    alert('Outer Radius value is lower than Inner Radius value!');
    document.getElementById("startAnimation").disabled = true;
  } else {
    document.getElementById("startAnimation").disabled = false;
  }
}

function doDrawing() {
  timesRun = 0;
  context.clear();
  context.beginPath();
  context.strokeStyle = '#' + strokeColor;
  context.moveTo(posX, posY);
  var interval = setInterval(function() {
    timesRun += 2;
    if (timesRun === maxRun) {
      clearInterval(interval);
    }
    drawCircle();
  }, 1);
}

function drawCircle() {
  if(!continueAnimating){return;}
  t += tInc;
  var x = Math.floor(posX + (R - r) * Math.cos(t) + O * Math.cos(((R - r) / r) * t));
  var y = Math.floor(posY + (R - r) * Math.sin(t) - O * Math.sin(((R - r) / r) * t));
  context.lineTo(x, y);
  context.stroke();
}

CanvasRenderingContext2D.prototype.clear =
  CanvasRenderingContext2D.prototype.clear || function(preserveTransform) {
    if (preserveTransform) {
      this.save();
      this.setTransform(1, 0, 1, 1, 0, 2);
    }
    this.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (preserveTransform) {
      this.restore();
    }
  }


document.getElementById('startAnimation').addEventListener('click',function(){
  continueAnimating = true;
  this.disabled = true;
  timeRun = 0;
  setTimeout(()=>{
    this.disabled = false;
  }, maxRun+600)
})

document.getElementById('stopAnimation').addEventListener('click',function(){
  continueAnimating = false;
})