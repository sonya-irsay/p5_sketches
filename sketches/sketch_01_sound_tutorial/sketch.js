// ====================
// NAMESPACED VERSION
// p > sketch > myp5
// ====================

// var canvasDiv = document.getElementById('container1');
// var w = canvasDiv.offsetWidth;
// console.log(w);

var sketch = function(p) {
  // p.canvasDiv = document.getElementById('container1');
  // p.h = p.canvasDiv.offsetHeight;
  // p.h = h;

  p.w = window.innerWidth * 0.8
  || document.documentElement.clientWidth * 0.8
  || document.body.clientWidth * 0.8;

  p.h = window.innerHeight * 0.2
  || document.documentElement.clientHeight * 0.2
  || document.body.clientHeight * 0.2;
  console.log(p.h);

  p.song;
  p.amp;
  p.button;
  p.volhistory = [];

  p.toggleSong = function() {
    if (p.song.isPlaying()) {
      p.song.pause();
    } else {
      p.song.play();
    }
  }

  p.preload = function() {
    p.song = p.loadSound('01_strawberry.mp3');
  }

  p.setup = function() {
    p.canvas = p.createCanvas(p.w, p.h);
    p.canvas.parent('container1');

    p.button = p.createButton('toggle');
    p.button.mousePressed(p.toggleSong);

    p.song.play();
    // amplitude or volume:
    p.amp = new p5.Amplitude();
  }

  p.draw = function() {
    p.background(0);

    p.vol = p.amp.getLevel();
    p.volhistory.push(p.vol);
    p.stroke(255);

    // p.translate(0, -p.height/2);
    p.beginShape();
    for (var i = 0; i < p.volhistory.length; i++) {
      // var y = map(volhistory[i], 0, 1, height/2, 0);
      p.y = p.map(p.volhistory[i], 0, 0.2, p.height, 0);
      p.vertex(i, p.y);
    }
    p.endShape();

    // when graph gets to the edge of the window:
    if (p.volhistory.length > p.width - 50) {
      p.volhistory.splice(0, 1);
    }
  }

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth * 0.8, p.windowHeight * 0.2);
  }

}

var myp5 = new p5(sketch, 'container1');
