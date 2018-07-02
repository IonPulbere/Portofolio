var toggle=document.getElementById('nav-toggle');
function showToggle(){
  var resNav=document.getElementById('responsive-nav');
  if(resNav.className==='responsive-nav'){
    resNav.className+=' show';
  }else{
    resNav.className='responsive-nav';
    console.log(resNav.className);

  }
}
toggle.addEventListener('click',function(e){
  e.preventDefault();
  showToggle();

},false);

// var toggle= document.getElementById('a-toggle');
// function shownav(){
//     var x = document.getElementById('responsive-nav');
//     if(x.className==='show'){
//       x.className="";
//     }else{
//       x.className='show';
//     }
// }
// toggle.addEventListener('click',function(e){
//     e.preventDefault();
//   shownav();
// },'false');
// // Prevent All ancor to folow the link============================
// var ancors= document.querySelectorAll('a');
// for(var i =0;i<ancors.length;i++){
//     ancors[i].addEventListener('click',function(e){
//     e.preventDefault();},
//     'false');
// }

// ================================================================
