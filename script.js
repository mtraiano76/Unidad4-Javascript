
let cubo1 = document.querySelector('.cubo1')
let cubo2 = document.querySelector('.cubo2')
let cubo3 = document.querySelector('.cubo3')


cubo1.addEventListener('onclick', e =>{
  contenedor.classList.toggle('darkmode')
});

cubo2.addEventListener('onclick', e =>{
  contenedor.classList.toggle('darkmode')
});

cubo3.addEventListener('onclick', e =>{
  contenedor.classList.toggle('darkmode')
});


  function countChars(obj){
    document.getElementById("charNum").innerHTML = obj.value.length+' Caracteres';
}


var alumnos = [
  {
    nombre: 'Juan Gomez',
    nota: 7
  }, {
    nombre: 'Pedro Rodriguez',
    nota: 4
  }, {
    nombre: 'Roxana García',
    nota: 8
  }, {
    nombre: 'Luciano Lopez',
    nota: 5
  }, {
    nombre: 'Fernanda Gimenez',
    nota: 6
  }, {
    nombre: 'Florencia Martinez', 
    nota: 10
  }, {
    nombre: 'Raul Sanchez',
    nota: 7
  }, {
    nombre: 'Sandra Figueroa',
    nota: 8
  }  
];
let aprobados = " "
let alumnosAprobados = alumnos.map(function(alumno){
    if (alumno.nota >= 7){
        aprobados += alumno.nombre + " "
        return aprobados + " "
    }

})
console.log(aprobados + " ")