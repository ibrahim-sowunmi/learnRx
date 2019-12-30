$(function() {
  $footer = $("footer");
  
  $container = $("#container");
  
  $allLis = $(".nav-item");
  // $(".nav li")
  
  $thirdLi = $(".nav-item").eq(2);
  // $(".list-container li:nth-child(3)")
  
  $listLast = $(".nav-item").eq(-1);
  // $(".list-container li:nth-child(3)")
  
  $footerLast = $(".footer-nav-item").eq(-1);
  // $("ul li:last-child")

  console.log("Let's get ready to jQuery!");
  
  $allImages =  $("article .image-center");
  
  $("p").eq(-1).remove();
  
  $("#title").css("font-size", (Math.random() * 100).toString() + "px");
  $("ol").append("<li>it can say whatever you want</li>");
  $("aside").empty();
  $("row input").eq(1);
  
    $(".form-control").on("keyup blur change", function() {
      $redVal = $(".form-control:eq(0)").val();
  console.log($redVal);
  
  $blueVal = $(".form-control:eq(1)").val();
  console.log($blueVal);
              
  $greenVal = $(".form-control:eq(2)").val();
  console.log($greenVal);  
    
  $("body").css("background-color", "rgb(" + $redVal + "," + $greenVal + "," + $blueVal + ")");
    
  });
  
  $("img").click(function() {
    $("img").remove();
  });
  
    
}