require(['../scss/allergy.scss','./main.js']);
$(".choose span").on("click",function(){
    $(this).addClass('active').siblings().removeClass('active');
    if($(this).index()==1){
        $('.items').show();
    }else{
        $('.items').hide()
    }
});


$(".items").on("click",'span',function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active');
    }else{
        $(this).addClass('active');
    }
});



$('.continueBtn').on("click",function(){
    location.href ="basicInfo.html";
});