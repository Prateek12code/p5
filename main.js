function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();

  

  fill('green');
  rect(24, 65, 55, 350);

  fill('green');
  rect(564, 65, 55, 350);

  fill('green');
  rect(40, 30, 564, 55);

  fill('green');
  rect(40, 400, 564, 55);

  circle(50, 50, 85);
  stroke('red');
  strokeWeight(4);
  circle(50, 50, 85);
  fill('brown');
  circle(50, 50, 85);

  circle(590, 50, 85);
  stroke('red');
  strokeWeight(4);
  circle(590, 50, 85);
  fill('brown');
  circle(590, 50, 85);

  circle(50, 430, 85);
  stroke('red');
  strokeWeight(4);
  circle(50, 430, 85);
  fill('brown');
  circle(50, 430, 85);

  circle(590, 430, 85);
  stroke('red');
  strokeWeight(4);
  circle(590, 430, 85);
  fill('brown');
  circle(590, 430, 85);
  
}


function take_snapshot(){    
  save('student_name.png');
}

