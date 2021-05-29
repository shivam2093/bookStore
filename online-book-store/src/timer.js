
import $ from "jquery"



function Sp() {
    var count = 0;
    var food = ["Action and Adventure",
        "Classics",
        "Comic Book or Graphic Novel",
        "Detective and Mystery",
        "Fantasy",
        "Historical Fiction",
        "Horror",
        "Literary Fiction"];
    setInterval(function () {
      count++;
      $("#word").fadeOut(400, function () {
        $(this)
          .text(food[count % food.length])
          .fadeIn(400);
      });
    }, 2000);
  }
  
  export default Sp;
  