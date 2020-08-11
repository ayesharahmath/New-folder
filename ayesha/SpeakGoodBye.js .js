( function (window) {
  var byeSpeaker = {};
  byeSpeaker.speakBye ="Good Bye";
  byeSpeaker.speak = function(name) {
  console.log(byeSpeaker.speakBye + " " + name);
}
 window.byeSpeaker = byeSpeaker;
}) (window);