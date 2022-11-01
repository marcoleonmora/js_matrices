/**
 * Codigo JavasCript para agregar funcionalidades a la página
 */

var matriz = [
   [0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0],
];

document.getElementById('opciones').addEventListener('change', ejecutarOpcion);

/**
 * Ejecuta una acción segun la opción seleccionada
 */
function ejecutarOpcion() {
   let opcion = document.getElementById('opciones').value;
   
   limpiarDerecha();
   switch (opcion) {
      case "1":
         generarMatriz();
         mostrarMatriz('i');
         break;
      case "2":
         mostrarMatriz('d');
         break;
      case "3":
         mostrarDiagPpal();
         break;
      case "4":
         mostrarDiagInv();
         break;
      case "5":
         mostrarSuperDer();
         break;
      case "6":

         break;
      case "7":

         break;
      case "8":

         break;
 
      default:
         break;
   }

}

/**
 * Genera numeros aleatorios para la matriz
 */
function generarMatriz() {
   for (let f = 0; f < matriz.length; f++) {
      for (let c = 0; c < matriz.length; c++) {
         matriz[f][c] = generarNumero(10, 100);
      }   
   }
}

/**
 * 
 * @param {char} l : indica cual grilla mostrar
 */
function mostrarMatriz(l) {
   for (let f = 0; f < matriz.length; f++) {
      for (let c = 0; c < matriz.length; c++) {
         //Construir nombre
         let nombre = l + '-f' + f + 'c' + c;
         //mostrar en la casilla  matriz[f][c];
         document.getElementById(nombre).innerText = matriz[f][c];
      }   
   }   
}


function limpiarDerecha() {
   for (let f = 0; f < matriz.length; f++) {
      for (let c = 0; c < matriz.length; c++) {
         //Construir nombre
         let nombre = 'd-f' + f + 'c' + c;
         //mostrar en la casilla  matriz[f][c];
         document.getElementById(nombre).innerText = '';
      }   
   }   
}

function mostrarDiagPpal() {
   for (let c = 0; c < matriz.length; c++) {
      //Construir nombre
      let nombre = 'd-f' + c + 'c' + c;
      document.getElementById(nombre).innerText = matriz[c][c];
   }      
}


function mostrarDiagInv() {
   for (let f = 0; f < matriz.length; f++) {
      let c = matriz.length-1-f;
      let nombre = 'd-f' + f + 'c' + c;
      document.getElementById(nombre).innerText = matriz[f][c];
   }      
}

function mostrarSuperDer() {
   
}




/**
 * Genera un numero entre min y max
 * @param {int} min: valor mínimo 
 * @param {int} max: valor máximo 
 * @returns num
 */
function generarNumero(min, max) {
   let num = parseInt(Math.random() * (max - min)) + min;
   return num;
}