// // ====================
// // TUTORIAL: coding train, 17.8 and 17.9 p5.js Sound
// // GLOBAL VERSION
// // ====================
//
// // var mic;
//
// var w = window.innerWidth
// || document.documentElement.clientWidth
// || document.body.clientWidth;
//
// var h = window.innerHeight
// || document.documentElement.clientHeight
// || document.body.clientHeight;
//
// var song;
// // amplitude or volume:
// var amp;
// var button;
//
// var volhistory = [];
//
// function toggleSong() {
//   if (song.isPlaying()) {
//     song.pause();
//   } else {
//     song.play();
//   }
// }
//
// function preload() {
//   song = loadSound('01_strawberry.mp3');
// }
//
// function setup() {
//   createCanvas(w, h);
//
//   // var cnv = createCanvas(w, h);
//   // cnv.style('display', 'block');
//   // cnv.style('padding', '20px');
//   // mic = new p5.AudioIn();
//   // mic.start();
//
//   button = createButton('toggle');
//   button.mousePressed(toggleSong);
//
//   song.play();
//   // amplitude or volume:
//   amp = new p5.Amplitude();
// }
//
// function draw() {
//   background(0);
//   // var vol = mic.getLevel();
//   var vol = amp.getLevel();
//   volhistory.push(vol);
//   stroke(255);
//   // noFill();
//   // translate(0, -height/2);
//   beginShape();
//   for (var i = 0; i < volhistory.length; i++) {
//     // var y = map(volhistory[i], 0, 1, height/2, 0);
//     var y = map(volhistory[i], 0, 1, height, 0);
//     vertex(i, y);
//   }
//   endShape();
//
//   // when graph gets to the edge of the window:
//   if (volhistory.length > width - 50) {
//     volhistory.splice(0, 1);
//   }
//
//   // ellipse(100, 100, vol*200, vol*200);
//   // console.log(vol);
// }
