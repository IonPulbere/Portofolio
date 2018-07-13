
var listEl= document.querySelectorAll(".flip-container").forEach( function( el ) {
    el.addEventListener("touchstart", function(){
    this.classList.toggle('hover');
  });
});
// var sa= document.querySelectorAll(".flip-container");
//
// for (var i=0;i<sa.length;i++){
//   console.log(sa[i]);
// }


// ontouchstart="this.classList.toggle('hover');"
