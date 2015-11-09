$( document ).ready(function() {


$(function(){
    $('.fadein img:gt(0)').hide();
    setInterval(function(){
      $('.fadein :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein');}, 
      4000);
});

$(function(){
    $('.fadein2 img:gt(0)').hide();
    setInterval(function(){
      $('.fadein2 :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein2');}, 
      4000);
});

$(window).scroll(function(){ 
    if ($(this).scrollTop() > 100) { 
        $('#scroll').fadeIn(); 
    } else { 
        $('#scroll').fadeOut(); 
    } 
}); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
  }); 
});