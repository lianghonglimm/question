require(['../scss/howFeel.scss','./main.js']);

$.ajax({
    url:"../data/data.json",
    success:function(e){
        var str='';
        $.each(e,function(i,val){
                str+="<dl>"+
                    "<dt>"+val.qName+"</dt><dd>"+
                    "<span>没有</span>"+
                    "<span>很少</span>"+
                    "<span class='active'>有时</span>"+
                    "<span>经常</span>"+
                    "<span>总是</span>"+
                    "</dd></dl>";
        });
        $(".box").append($(str));
    }
});
$(document).on("click","span",function(){
   if($(this).hasClass('active')){
        $(this).removeClass('active');
    }else{
        $(this).addClass('active').siblings().removeClass('active');
    }
});
$('.btn').on('click',function(){
    location.href="status.html";
});