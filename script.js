let contenedor = document.querySelector('.contenedor')
let cubo1 = document.querySelector('.cubo1')


cubo1.addEventListener('onclick', e =>{
  contenedor.classList.toggle('darkmode')
  
  
  })


  function countChars(obj){
    document.getElementById("charNum").innerHTML = obj.value.length+' Caracteres';
}