
setTimeout(load,1000);
// show loading page

function load(){
  window.onload = loadLogic();
}
function loadLogic(){ 
  var div = document.getElementById("load");
  div.remove();
  document.getElementById("content").style.display = "block";
}