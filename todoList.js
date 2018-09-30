// //Check Off specific todos by clicking
// //if li is gray
// if($(this).css("color") === "gray") {
//   console.log("It is currently gray");
// }

$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//click on x to delete todo
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if(event.which === 13) {
    let todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><i class='fas fa-trash-alt'></i>" + todoText + "</li>");
  }
});

$(".fa-plus").on('click', function() {
  $("input[type='text']").fadeToggle();
});