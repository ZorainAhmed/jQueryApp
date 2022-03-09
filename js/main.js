$(document).ready(function(){
    $(window).on("scroll",function() {
        if($(this).scrollTop() > 80){
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
        var parallax = $(".parallax");
        var scrollPosition = $(this).scrollTop();
        parallax.css("transform","translateY(" + scrollPosition * 0.5 + "px"+ ")");
    });
    $(".radio-btn").on("click",function() {
        $(".radio-inner").toggleClass("active"); 
        $("body").toggleClass("dark"); 
    });
    $(".nav-link").on("click",function () {
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    });
    $(".hamburger").on("click",function(){
        $(this).toggleClass("active");
        $(".navbar ul").toggleClass("active");
    })
    $(".subscribe-btn").on("click",function () {
        $("#popup").addClass("active"); 
      });
      $(".close").on("click",function () {
        $("#popup").removeClass("active"); 
      });
      $(".card").on("mouseenter",function(){
        $(this).addClass("selected").siblings().removeClass("selected");
    });
});
$("input").keypress(function (e) {
    if(e.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("#todo-ul").append('<li id="todo-li">' + todoText + '<span><i class="fa fa-trash"></i></span>')
    }
 });
 $("#todo-ul").on("click","span",function (e) {
     $(this).parent().fadeOut(500,function () {
         $(this).remove();
     });
     e.stopPropagation();
 });
 $("#todo-ul").on("click","#todo-li",function () {
    $(this).toggleClass("done");
 });