// typer effect
setInterval(function () {
  $(".typer-effect")
    .animate(
      {
        opacity: 0,
      },
      "fast",
      "swing"
    )
    .animate(
      {
        opacity: 1,
      },
      "fast",
      "swing"
    );
}, 600);

// update footer
var today = new Date();
var year = today.getFullYear();
var copyright = document.getElementById("copyright");
copyright.innerHTML =
  "&copy" +
  year +
  " | hi@njthnelvgn.com |IG- @code.is.poetry | Image - " +
  "Jehu Christan";


var isLast = function(word) {
  return $(word).next().length > 0 ? false : true;
}

var getNext = function(word) {
  return $(word).next();
}

var getVisible = function () {
  return document.getElementsByClassName('is-visible');
}

var getFirst =  function() {
  var node = $('.words-wrapper').children().first();
  return node;
}

var switchWords = function(current, next) {
  $(current).removeClass('is-visible').addClass('is-hidden');
  $(next).removeClass('is-hidden').addClass('is-visible');
}

var getStarted = function() {
  //We start by getting the visible element and its sibling
  var first = getVisible();
  var next = getNext(first);
  
  //If our element has a sibling, it's not the last of the list. We switch the classes
  if (next.length !== 0) {
     switchWords(first,next);
  } else {
    
    //The element is the last of the list. We remove the visible class of the current element
    $(first).removeClass('is-visible').addClass('is-hidden');
    
    //And we get the first element of the list, and we give it the visible class. And it starts again.
    var newEl = getFirst();
    $(newEl).removeClass('is-hidden').addClass('is-visible');
  }
  
}

var init = function() {
  setInterval(function() {getStarted()}, 3000);
}

init();
