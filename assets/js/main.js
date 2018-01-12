var modal0 = document.getElementById(`martabak-coklat-modal`);
var modal1 = document.getElementById(`martabak-coklat-kacang-modal`);
var modal2 = document.getElementById(`martabak-coklat-pandan-modal`);
var modal3 = document.getElementById(`martabak-coklat-redvelvet-modal`);
var modal4 = document.getElementById(`martabak-keju-modal`);
var modal5 = document.getElementById(`martabak-keju-kacang-coklat-modal`);
var modal6 = document.getElementById(`martabak-keju-pandan-modal`);
var modal7 = document.getElementById(`martabak-keju-redvelvet-modal`);

var btn0 = document.getElementById(`martabak-coklat`);
var btn1 = document.getElementById(`martabak-coklat-kacang`);
var btn2 = document.getElementById(`martabak-coklat-pandan`);
var btn3 = document.getElementById(`martabak-coklat-redvelvet`);
var btn4 = document.getElementById(`martabak-keju`);
var btn5 = document.getElementById(`martabak-keju-kacang-coklat`);
var btn6 = document.getElementById(`martabak-keju-pandan`);
var btn7 = document.getElementById(`martabak-keju-redvelvet`);

var span0 = document.getElementById(`close0`);
var span1 = document.getElementById(`close1`);
var span2 = document.getElementById(`close2`);
var span3 = document.getElementById(`close3`);
var span4 = document.getElementById(`close4`);
var span5 = document.getElementById(`close5`);
var span6 = document.getElementById(`close6`);
var span7 = document.getElementById(`close7`);

var modalWindow = document.getElementsByClassName('modal');

btn0.onclick = function(){
  modal0.style.display = `block`;
}


btn1.onclick = function(){
  modal1.style.display = `block`;
}

btn2.onclick = function(){
  modal2.style.display = `block`;
}


btn3.onclick = function(){
  modal3.style.display = `block`;
}

btn4.onclick = function(){
  modal4.style.display = `block`;
}


btn5.onclick = function(){
  modal5.style.display = `block`;
}

btn6.onclick = function(){
  modal6.style.display = `block`;
}


btn7.onclick = function(){
  modal7.style.display = `block`;
}

span0.onclick = function(){
  modal0.style.display = `none`;
}

span1.onclick = function(){
  modal1.style.display = `none`;
}

span2.onclick = function(){
  modal2.style.display = `none`;
}

span3.onclick = function(){
  modal3.style.display = `none`;
}

span4.onclick = function(){
  modal4.style.display = `none`;
}

span5.onclick = function(){
  modal5.style.display = `none`;
}

span6.onclick = function(){
  modal6.style.display = `none`;
}

span7.onclick = function(){
  modal7.style.display = `none`;
}

/*
window.onclick = function(){
  if(event.target == modalWindow){
    modalWindow.style.display = `none`;
  }
}
*/
