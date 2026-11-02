$("li").click(function() {
   alert("You clicked on a list item!");
});


$("#btn").click(function() {
   console.log("You clicked on the button!");
   $("h1").text("You clicked the button!");
   $("h1").append("<p>Button was clicked!</p>");
});

$("#div1").click(function() {
    $(this).addClass("clicked");
}); 

$("#btn2").click(function() {
    $(".hidden").hide();
    $("#square").hide();
});

$("#btn3").click(function() {
    $(".hidden").show();
    $("#square").show();
});