var text= document.getElementById ('text');



function mooving (help,id){
var cercle= document.getElementById (id);
cercle.style.background='FireBrick';
cercle.style.border='FireBrick';
  text.firstChild.innerHTML= help;

}

function time (id){
  text.firstChild.innerHTML='i m desperate i need help';
  var cercle= document.getElementById (id);
  cercle.style.background='black';
  cercle.style.border='black';
}
