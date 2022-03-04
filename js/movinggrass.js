$(function() {

let grasscanvas = document.getElementById("test"),
  grassctx = grasscanvas.getContext("2d"),
  stack = [],
  grassw = window.innerWidth,
  grassh = window.innerHeight;

const drawer = function() {
  grassctx.fillStyle = "rgba(0, 0, 0, 0)";
  grassctx.fillRect(0, 0, grassw, grassh);
  grassctx.clearRect(0, 0, grassw,grassh);

  stack.forEach(function(el) {
    el();
  });
  requestAnimationFrame(drawer);
};

function randomInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const anim = function() {
  let grassx = 0;
  const speed = Math.random() * 7;
  const position = Math.random() * grassw - grassw / 2;
  const maxTall = Math.random() * 100 + 20;
  const maxSize = Math.random() * 10 + 5;
  const grassc = function(l, u) {
    return Math.round(Math.random() * (u || 100) + l || 0);
  };
  const grasscolor = "rgb(" + randomInt(90, 125) + "," + randomInt(170, 180) + "," + randomInt(65, 75) + ")";
  
  return function() {

    const deviation = Math.cos(grassx / 30) * Math.min(grassx / 40, 50),
      tall = Math.min(grassx / 5, maxTall),
      size = Math.min(grassx / 50, maxSize);

	  grassx += speed;
    grassctx.save();

    grassctx.strokeWidth = 10;
    grassctx.translate(grassw / 2 + position, grassh);
    grassctx.fillStyle = grasscolor;

    grassctx.beginPath();
    grassctx.lineTo(-size, 0);
    grassctx.quadraticCurveTo(-size, -tall / 2, deviation, -tall);
    grassctx.quadraticCurveTo(size, -tall / 2, size, 0);
    grassctx.closePath();
    grassctx.fill();
    
    grassctx.restore();
  };
};

for (var xx = 0; xx < 300; xx++) {
  stack.push(anim());
}

grasscanvas.width = grassw;
grasscanvas.height = grassh;

// drawer();

function initialize() {
  // Register an event listener to call the resizeCanvas() function 
  // each time the window is resized.
  window.addEventListener('resize', resizeCanvas, false);
  // Draw canvas border for the first time.
  drawer();
}

function resizeCanvas() {
  grassw = window.innerWidth,
  grassh = window.innerHeight;
  grasscanvas.width = grassw;
  grasscanvas.height = grassh;
  stack = [];
  for (var xx = 0; xx < 300; xx++) {
    stack.push(anim());
  }
}

initialize();

});