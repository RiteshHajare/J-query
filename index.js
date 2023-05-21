$('document').ready(()=>{
  $("button").click(function(event){
    console.warn("hi");
  });

})
var num=1;
function handleClk(){

  $("ol").prepend(`<li>${num}</li>`);
  $("ol").append(`<li>${num}</li>`);
  num+=1;
}