"use strict";
let baseDiv = document.querySelector("#base_color");
window.addEventListener("load", init, false);

// siden læses og functionerne startes
function init() {
  document.querySelector("#head").addEventListener("input", colorPicker, false);
}

function colorPicker(event) {
  let hexColor = event.target.value;
  baseDiv.style.backgroundColor = hexColor;
  let rgbColor = baseDiv.style.backgroundColor;
  getPureRgb(rgbColor);
  // setBaseColor(hslColor);
}

// conveterings function hvor HEX-kode bliver omdannet til RGB-string
// og efterfølgende slice RGB-string i mindre bider.
function getPureRgb(rgbColor) {
  let rgbString = rgbColor.substring(4, rgbColor.length - 1);
  console.log(rgbString);
  let rgbNumbers = rgbString.split(", ");
  console.log(rgbNumbers);
  let r = rgbNumbers[0];
  let g = rgbNumbers[1];
  let b = rgbNumbers[2];
  convertRgbToHsl(r, g, b);
}

//converterings function fra RGB-string til HSL værdier
function convertRgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // ganger s og l med 100 for at få værdien i procenter, frem for [0,1]
  s *= 100;
  l *= 100;

  // test om der er hul igennem
  console.log("hsl(%f,%f%,%f%)", h, s, l);
}
/* 
//her sættes farven på det felt der udgør min basecolor, udfra id og værdi i colorpickeren
function setBaseColor(hslColor) {
  //console.log(setBaseColor);

  document.querySelector("#head").value = "#ffffff";
}

let output_hex = document.querySelector("#output_hex");

let head = document.querySelector("#head");

//Her for vi vist vores #HEXCODE på den valgte farve
head.addEventListener("change", function() {
  output_hex.innerText = "Hexcode" + head.value;
});

// id på har fået addet en eventlistner, således at når der vælges farve, sættes farven på boxen der
//er valgt med id = base_color.
head.addEventListener("input", function(event) {
  base_color.style.backgroundColor = event.target.value;
}); 

function calculateColor(basecolor) {}

function analogous() {}

function monocromatic() {}

function triad() {}

function compound() {}

function complementary() {}

function shade() {}

function setColor(id, color) {}
*/
