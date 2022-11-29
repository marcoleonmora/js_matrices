/**
 * Controlador de la animación de imagenes
 * en el canvas
 * MLM
 */


//++++ VARIABLES GLOBALES ++++++++++++++++++
var canvas = null;
var ctx = null;
var ancho = 1000;
var alto = 550;

const COLOR_NAMES = [
   "AliceBlue",
   "AntiqueWhite",
   "Aqua",
   "Aquamarine",
   "Azure",
   "Beige",
   "Bisque",
   "Black",
   "BlanchedAlmond",
   "Blue",
   "BlueViolet",
   "Brown",
   "BurlyWood",
   "CadetBlue",
   "Chartreuse",
   "Chocolate",
   "Coral",
   "CornflowerBlue",
   "Cornsilk",
   "Crimson",
   "Cyan",
   "DarkBlue",
   "DarkCyan",
   "DarkGoldenRod",
   "DarkGray",
   "DarkGrey",
   "DarkGreen",
   "DarkKhaki",
   "DarkMagenta",
   "DarkOliveGreen",
   "DarkOrange",
   "DarkOrchid",
   "DarkRed",
   "DarkSalmon",
   "DarkSeaGreen",
   "DarkSlateBlue",
   "DarkSlateGray",
   "DarkSlateGrey",
   "DarkTurquoise",
   "DarkViolet",
   "DeepPink",
   "DeepSkyBlue",
   "DimGray",
   "DimGrey",
   "DodgerBlue",
   "FireBrick",
   "FloralWhite",
   "ForestGreen",
   "Fuchsia",
   "Gainsboro",
   "GhostWhite",
   "Gold",
   "GoldenRod",
   "Gray",
   "Grey",
   "Green",
   "GreenYellow",
   "HoneyDew",
   "HotPink",
   "IndianRed",
   "Indigo",
   "Ivory",
   "Khaki",
   "Lavender",
   "LavenderBlush",
   "LawnGreen",
   "LemonChiffon",
   "LightBlue",
   "LightCoral",
   "LightCyan",
   "LightGoldenRodYellow",
   "LightGray",
   "LightGrey",
   "LightGreen",
   "LightPink",
   "LightSalmon",
   "LightSeaGreen",
   "LightSkyBlue",
   "LightSlateGray",
   "LightSlateGrey",
   "LightSteelBlue",
   "LightYellow",
   "Lime",
   "LimeGreen",
   "Linen",
   "Magenta",
   "Maroon",
   "MediumAquaMarine",
   "MediumBlue",
   "MediumOrchid",
   "MediumPurple",
   "MediumSeaGreen",
   "MediumSlateBlue",
   "MediumSpringGreen",
   "MediumTurquoise",
   "MediumVioletRed",
   "MidnightBlue",
   "MintCream",
   "MistyRose",
   "Moccasin",
   "NavajoWhite",
   "Navy",
   "OldLace",
   "Olive",
   "OliveDrab",
   "Orange",
   "OrangeRed",
   "Orchid",
   "PaleGoldenRod",
   "PaleGreen",
   "PaleTurquoise",
   "PaleVioletRed",
   "PapayaWhip",
   "PeachPuff",
   "Peru",
   "Pink",
   "Plum",
   "PowderBlue",
   "Purple",
   "RebeccaPurple",
   "Red",
   "RosyBrown",
   "RoyalBlue",
   "SaddleBrown",
   "Salmon",
   "SandyBrown",
   "SeaGreen",
   "SeaShell",
   "Sienna",
   "Silver",
   "SkyBlue",
   "SlateBlue",
   "SlateGray",
   "SlateGrey",
   "Snow",
   "SpringGreen",
   "SteelBlue",
   "Tan",
   "Teal",
   "Thistle",
   "Tomato",
   "Turquoise",
   "Violet",
   "Wheat",
   "White",
   "WhiteSmoke",
   "Yellow",
   "YellowGreen",
 ];

var pelota = {
    'r': 30,
    'pos': {'x': 30, 'y': 30},
    'vel': {'x': 4, 'y': 1.5},
    'color': asignarColor()
};

/**
 * Cargue y configuración inicial
 */
window.addEventListener('load', function() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = ancho;
    canvas.height = alto;
    ctx.fillStyle = "lightskyblue";
    ctx.fillRect(0, 0, ancho, alto);
    
    run();
});

function run() {
    dibujar();
    actualizar();
    requestAnimationFrame(run);
}






 

function dibujar() {
    ctx.beginPath();
        //Fondo
        ctx.fillStyle = "lightskyblue";
        ctx.fillRect(0, 0, ancho, alto);

        //Esfera
        ctx.arc(pelota.pos.x, pelota.pos.y, pelota.r, 0, 2*Math.PI);
        ctx.fillStyle= pelota.color;
        ctx.strokeStyle = pelota.color;
        ctx.fill();
    ctx.stroke();
}

function actualizar() {
    pelota.pos.x += pelota.vel.x;
    pelota.pos.y += pelota.vel.y;
    rebotar();
}

function rebotar() {
    if ((pelota.pos.x >= ancho -pelota.r) || (pelota.pos.x <= pelota.r)) {
        pelota.vel.x *= -1;
        pelota.pos.x += pelota.vel.x;
        pelota.color = asignarColor(); 
    }
    if ((pelota.pos.y >= alto -pelota.r) || (pelota.pos.y <= pelota.r)) {
        pelota.vel.y *= -1;
        pelota.pos.y += pelota.vel.y;
        pelota.color = asignarColor(); 
    }
    
}

//************** FUNCIONES AUXILIARES *****************

//Genera un numero entero al azar entre min y max
function aleatorio(min, max){
    return Math.round(min + Math.random()*(max-min));
}

function asignarColor(){
    indice = aleatorio(0, COLOR_NAMES.length);
    return COLOR_NAMES[indice];
}






//



/*
	//Dibuja el objeto en el canvas 
mostrar(){
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
    ctx.stroke();
}

/* DEFINICION DE LA CLASE *****************************************
class Burbuja {
    constructor() {
        this.r = aleatorio(8, 15);
        this.x = aleatorio(0 + this.r, canvasW-this.r);
        this.y = aleatorio(canvasH - 30, canvasH - 20);
    }
*/

