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
var span = document.getElementsByClassName(`close`)[0];
var modalWindow = document.getElementsByClassName('modal');

btn0.onclick = function(){
  modal0.style.display = `block`;
}

span.onclick = function(){
  modalWindow.style.display = `none`;
}

window.onclick = function(){
  if(event.target == modal0){
    modalWindow.style.display = `none`;
  }
}

btn1.onclick = function(){
  modal1.style.display = `block`;
}

span.onclick = function(){
  modalWindow.style.display = `none`;
}

window.onclick = function(){
  if(event.target == modal1){
    modalWindow.style.display = `none`;
  }
}


btn2.onclick = function(){
  modal2.style.display = `block`;
}

span.onclick = function(){
  modal2.style.display = `none`;
}

window.onclick = function(){
  if(event.target == modal2){
    modal2.style.display = `none`;
  }
}

btn3.onclick = function(){
  modal3.style.display = `block`;
}

span.onclick = function(){
  modal3.style.display = `none`;
}

window.onclick = function(){
  if(event.target == modal3){
    modal3.style.display = `none`;
  }
}

btn4.onclick = function(){
  modal4.style.display = `block`;
}

span.onclick = function(){
  modal4.style.display = `none`;
}

window.onclick = function(){
  if(event.target == modal4){
    modal4.style.display = `none`;
  }
}

btn5.onclick = function(){
  modal5.style.display = `block`;
}

span.onclick = function(){
  modal5.style.display = `none`;
}

window.onclick = function(){
  if(event.target == modal5){
    modal5.style.display = `none`;
  }
}

btn6.onclick = function(){
  modal6.style.display = `block`;
}

span.onclick = function(){
  modal6.style.display = `none`;
}

window.onclick = function(){
  if(event.target == modal6){
    modal6.style.display = `none`;
  }
}

btn7.onclick = function(){
  modal7.style.display = `block`;
}

span.onclick = function(){
  modal7.style.display = `none`;
}

window.onclick = function(){
  if(event.target == modal7){
    modal7.style.display = `none`;
  }
}
