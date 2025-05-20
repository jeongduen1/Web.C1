$(".main-menu>li").mouseover(function(){
    $(this).children(".sub-menu").show()
})
$(".main-menu>li").mouseleave(function(){
    $(this).children(".sub-menu").hide()
})

let cnt=9999;
setInterval(function(){
  if(cnt<2){
    cnt++;
  }
  else{
    cnt=0;
  }
  $('.slide ul li').eq(cnt).fadeIn(500);
  $('.slide ul li').eq(cnt).siblings().fadeOut(500);
},3000)

$(".notice-btn").click(function(){
    $(".tab-notice").show()
    $(".tab-gallery").hide()
})
$(".gallery-btn").click(function(){
    $(".tab-gallery").show()
    $(".tab-notice").hide()
})

$(".open-modal").click(function(){
    $(".modal").show()
})
$(".close-modal").click(function(){
    $(".modal").hide()
})