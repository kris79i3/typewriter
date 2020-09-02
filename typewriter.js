"use strict";

let text = document.querySelector("#typewriter").textContent;
let i = 0;

document.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");

  if (i <= text.length) {
    document.querySelector("#typewriter").textContent = text.substring(0, i);
    document.querySelector("#typekey1").play();
    i++;
    setTimeout(start, 400);
  }
}
