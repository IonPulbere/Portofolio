var myClass='actClass';
var lis= document.querySelectorAll("#responsive-nav a");
for(var i=0;i<lis.length;i++){
  lis[i].addEventListener("click", function(){
   var curentclas=this.className;
   var clk=document.querySelectorAll(".actClass");
   for(var i=0;i<clk.length;i++){
     clk[i].className='';
   }
    this.className=myClass;
   });

}
