"use strict";

document.addEventListener("DOMContentLoaded", init, false);
// siden læses og functionerne startes
function init() {
  document.querySelector("#head").addEventListener("input", colorPicker, false);
}

function colorPicker(event) {
  //console.log("ColorPicker");
  //console.log(event);
  const hexColor = event.target.value;
  const rgbColor = convertHexToRgb(hexColor);
  const hslColer = convertRgbToHsl(rgbColor);

  setBaseColor(hslColer);
}

// conveterings function hvor HEX-kode bliver omdannet til RGB-string
// og efterfølgende slice RGB-string i mindre bider.
function convertHexToRgb(hexcolor) {
  //console.log("convertHEXtoRGB");
  //console.log(hexcolor);
  const hexString = hexcolor.substring(1, 7);
  const string1 = hexString.slice(0, 2);
  const string2 = hexString.slice(2, 4);
  const string3 = hexString.slice(4, 6);

  const red = parseInt(string1, 16);
  const green = parseInt(string2, 16);
  const blue = parseInt(string3, 16);

  console.log(`rgb(${red}, ${green}, ${blue})`);
  //return { red, green, blue };

  convertRgbToHsl(red, green, blue);
}

//converterings function fra RGB-string til HSL værdier
function convertRgbToHsl(red, green, blue) {
  let r = red;
  let g = green;
  let b = blue;

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
  //console.log("hsl(%f,%f%,%f%)", h, s, l);
}

//her sættes farven på det felt der udgør min basecolor, udfra id og værdi i colorpickeren
function setBaseColor(hslColor) {
  //console.log(setBaseColor);

  // document.querySelector("#head").value = "#base_color";
  document.querySelector("#head").value = "#ffffff";
}
let output_hex = document.querySelector("#output_hex");

// id på har fået addet en eventlistner, således at når der vælges farve, sættes farven på boxen der
//er valgt med id = base_color.
head.addEventListener("input", function(event) {
  base_color.style.backgroundColor = event.target.value;
});

//Her for vi vist vores #HEXCODE på den valgte farve
head.addEventListener("change", function() {
  output_hex.innerText = "something" + head.value;
});

function calculateColor(basecolor) {}

function analogous() {}

function monocromatic() {}

function triad() {}

function compound() {}

function complementary() {}

function shade() {}

function setColor(id, color) {}
