$("#siwa,#siwa2").click(function(){
  $(".siwa").css({display:"block"});
 $(".box,.box-small").not(".siwa").css({display:'none'});

});
$("#ol,#ol2").click(function(){
   $(".ol").css({display:"block"});
 $(".box,.box-small").not(".ol").css({display:'none'});
});
$("#hushi,#hushi2").click(function(){
   $(".hushi").css({display:"block"});
 $(".box,.box-small").not(".hushi").css({display:'none'});
});
$("#nvzi,#nvzi2").click(function(){
   $(".nvzi").css({display:"block"});
 $(".box,.box-small").not(".nvzi").css({display:'none'});
});
$("#luoli,#luoli2").click(function(){
   $(".luoli").css({display:"block"});
 $(".box,.box-small").not(".luoli").css({display:'none'});
});
$("#renqi,#renqi2").click(function(){
   $(".renqi").css({display:"block"});
 $(".box,.box-small").not(".renqi").css({display:'none'});
});
$("#vr,#vr2").click(function(){
   $(".vr").css({display:"block"});
 $(".box,.box-small").not(".vr").css({display:'none'});
});

$("#cancel,#cancel2").click(function(){
   $('.box,.box-small').css({display:'block'});
});

$("#zhe1").click(function(){
   $("#zhan1").toggle();
   $("#zhe1").css({display:'none'});
   $("#zhe2").css({display:'block'});
  /* if($("#zhan1").css({display:'none'})){
      $("#zhe1 i").css({transform:'rotate(180deg)'});
      $("#zhan1").toggle();
   }
   else{
      $("#zhe1 i").css({transform:'rotate(0deg)'});
   }*/
});
$("#zhe2").click(function(){
   $("#zhan2").toggle();
   $("#zhe2").css({display:'none'});
});
var saixuan=document.querySelectorAll(".nav-item");
var saixuan2=document.querySelectorAll(".nav-item-move");
console.log(saixuan);
for(var i=0;i<saixuan.length;i++){
   saixuan[i].onclick=function(){
     $(this).addClass("active-bn");
     $(this).prevAll().removeClass("active-bn");
     $(this).nextAll().removeClass("active-bn");
   }
}

for(var j=0;j<saixuan2.length;j++){
   saixuan2[j].onclick=function(){
      $(this).addClass("active-bn");
      $(this).prevAll().removeClass("active-bn");
      $(this).nextAll().removeClass("active-bn");
   }
}



$(".search input").focus(function(){
    $(".tishi").css({display:"block"});
});
$(".search input").blur(function(){
   $(".tishi").css({display:"none"});
});
$(".bar-left-fu").mouseenter(function(){
    $(".bar-left-fu").css({left:"12%",opactiy:"0.7"})
   $(".bar-left").css({width:"12%",opactiy:"0.7"}); 
   $(".bar-left-fu>i").css({transform:"rotate(180deg"});     
});
$(".bar-left-fu").mouseleave(function(){
    $(".bar-left-fu").css({left:"5%"})
   $(".bar-left").css({width:"5%"});  
   $(".bar-left-fu>i").css({transform:"rotate(360deg"});         
});
$(".bar-left").mouseenter(function(){
    $(".bar-left-fu").css({left:"12%",opactiy:"0.7"})
   $(".bar-left").css({width:"12%",opactiy:"0.7"});
   $(".bar-left-fu>i").css({transform:"rotate(180deg"});           
});
$(".bar-left").mouseleave(function(){
    $(".bar-left-fu").css({left:"5%"})
   $(".bar-left").css({width:"5%"}); 
   $(".bar-left-fu>i").css({transform:"rotate(360deg"});           
});


var width=$(window).width();
var height=$(window).height();
/*alert(width+"<br>"+height);*/
if(width<=375&&width>200){
  /*alert("移动端")  */  
  $(".bar-left").css({width:"15%"});
  $(".bar-left-fu").css({left:"15%",opactiy:"0.5"});     
}
if(width<=760&&width>375){
  //alert("移动端")  
  $(".bar-left").css({width:"15%"});
  $(".bar-left-fu").css({left:"15%",opactiy:"0.5"});           
}

$(".r").removeClass("mt-2");
//侧边导航栏高度=右边content盒子高度
var ch=$(".content").height();
$(".bar-left").css({height:ch});

var zhi=$("#sh").val();

var z=document.querySelectorAll(".box-footer");

function search(){
  var zhi=$("#sh").val();
 console.log(zhi);
  for(var i=0;i<z.length;i++){
    var totals=z[i].innerText;
   if(totals.includes(zhi)){
      $(this).parent().parent('.box').css({display:'block'});
      $(this).parent().parent('.box').prevAll().css({display:'none'});
      $(this).parent().parent('.box').nextAll().css({display:'none'});
   }
 
}
}


//放大图标垂直居中
var b_p_h=$(".box-picture").height();
var i_h=$(".box-picture i").height();
var b_j2=(b_p_h-i_h)/2;
$(".box-picture i").css({marginTop:b_j2,marginBottom:b_j2});

$(".open i").removeClass("fa-plus");
$(".open i").addClass("fa-plus-circle");
$(".open i").addClass("fa-3x");
