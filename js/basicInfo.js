require(['../scss/basicInfo.scss','./main.js']);


$(".content ul li").on("click","i",function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active');
    }else{
        $(this).addClass('active');
    }
});
$('.btn').on("click",function () {
   $(".mask").show();
});
$('.close').on("click",function(){
    $(".mask").hide();
});

$('.test_btn').on("click",function(){
    location.href ="howFeel.html";
});
