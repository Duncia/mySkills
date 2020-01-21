$(document).ready(function(){
    
// Menu sliding
    
    $(".sandwichM").on('click touchstart', function(){
        $(".navMenu").animate({
            top: "0px"}, 1000);

  });
    
    $(".menuClose").on('click touchstart', function(){
        $(".navMenu").animate({
            top: "-123px"}, 1000);
  });
    
// Carousel slides

    $('[data-toggle="tooltip"]').tooltip(); 
    
// Examples of jQuery
    
    $(".changedTextOne").mouseenter(function(){
        $(".changedTextOne").css("color", "#17a2b8");
  });
    
    $(".changedTextOne").mouseleave(function(){
        $(".changedTextOne").css("color", "#000");
  });
    
    $("#exampleButton").click(function(){
        $("#changedTextTwo").animate({fontSize: "1.5rem"});
  }); 
    $("#exampleButton2").click(function(){
        $("#changedTextTwo").animate({fontSize: "1rem"});
  });
    
});
