$("#open-sidenav").click(function(){
    $(".sidenav").animate({width:"250px"},500);
    $(".menu-btn").animate({paddingLeft:"240px"},500);
})
$(".side-menu-icon").click(function(){
    $(".sidenav").animate({width:"250px"},500);    
    $(".menu-btn").animate({paddingLeft:"240px"},500);
})
$("#close").click(function(){
    $(".sidenav").animate({width:"0px"},500);    
    $(".menu-btn").animate({paddingLeft:"0px"},500);
})
for(let i=1;i<4;i++)
{
    $("#singer-head-"+i+"").siblings().slideUp(0);
}
for(let i=0;i<4;i++)
{
    $("#singer-head-"+i+"").click(function(){
        $("#singer-head-"+i+"").siblings().slideToggle(1000);
    })
}

$("#comment").keyup(function(){

    if($("#comment").val().length <100)
    {
       $("#Characyer").html( 100 - $("#comment").val().length ); 
    }   
    else
    {
        $("#Characyer").html("your available character finished"); 
    }  
})


$(".sidenav a").click(function(){
    
    let link=$(this).attr("href");
    let distance=$(link).offset().top;
    $("body,html").animate({scrollTop:distance},1000);

})

let date=$(".part");
var determineDate = function(){

    let currentdate =new Date();

    let meetingDay =new Date(2018,2,1,6,30,10);

    date.eq(0).html(`${(currentdate.getYear() - meetingDay.getYear())*365} D`);
    date.eq(1).html(`${currentdate.getHours() - meetingDay.getHours()} H`);
    date.eq(2).html(`${currentdate.getMinutes() - meetingDay.getMinutes()} m`);
    date.eq(3).html(`${currentdate.getSeconds() - meetingDay.getSeconds()} s`);

}

setInterval(determineDate, 1000);


