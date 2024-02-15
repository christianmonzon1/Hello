let space=[];
$(".add").click(function() {
 var more=$(".picture-url").val();   
 space.push(more);
 $(".gallery").append("<img src='"+more+"'>");
 $(".picture-url").val("");
   
});