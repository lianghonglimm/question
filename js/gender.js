require(['../scss/gender.scss']);
require('./main');
var $=require('jquery');
$('.sex').on('click',"dl",function(){
    $(this).find('.chooseBtn').addClass('active').end().siblings().find('.chooseBtn').removeClass('active');
});

$('.continueBtn').on("click",function(){
    var gender = $('.sex .active').attr('gender');
    var param = encodeURI('gender='+gender);
    location.href ='illness.html?'+param;
});