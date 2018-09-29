// //Check Off specific todos by clicking
// //if li is gray
// if($(this).css("color") === "gray") {
//   console.log("It is currently gray");
// }

$("li").click(function() {
  $(this).toggleClass("completed");
});

//click on x to delete todo
$("span").click(function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function() {
  console.log("key press!");
});
