require(['../scss/status.scss','./main.js']);

$(".right_arrow").click(function(){
    $(".describe").toggle();
    $(".wholeArticle").toggle();
});
$(".peut").click(function(){
    $("#fruits1").toggle();
});
$(".pes").click(function(){
    $("#fruits2").toggle();
});

