// showing navbar
var step = 100;

var stepFilter= 60;
 var scrolling = true;



$(".back").bind("click", function(e){
     e.preventDefault();

$(".highlight-wrapper").animate({ 
    scrollLeft: "-=" + step + "px"
 });

});

$(".next").bind("click", function(e){

e.preventDefault();

$(".highlight-wrapper").animate({

scrollLeft: "+=" + step + "px"

})
})
