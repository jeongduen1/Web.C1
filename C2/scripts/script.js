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

$(".open-modal").click(function(){
    $(".modal").show()
})
$(".close-modal").click(function(){
    $(".modal").hide()
})