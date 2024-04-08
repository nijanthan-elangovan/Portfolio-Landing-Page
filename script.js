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
  " | hi@njthnelvgn.com |IG- @code.is.poetry | 📸Unsplash - " +
  "Jehu Christan";
