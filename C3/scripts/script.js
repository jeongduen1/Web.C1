$(".main-menu>li").mouseover(function(){
    $(this).children(".sub-menu").show()
})
$(".main-menu>li").mouseleave(function(){
    $(this).children(".sub-menu").hide()
})

$(".open-modal").click(function(){
    $(".modal").show()
})
$(".close-modal").click(function(){
    $(".modal").hide()
})