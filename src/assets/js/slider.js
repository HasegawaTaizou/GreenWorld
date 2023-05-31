"use strict";

let slideIndexImages = 0;

export default function showSlidesImages() {
  let i;
  let slides = document.getElementsByClassName("who-we-are__image");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexImages++;

  if (slideIndexImages > slides.length) {
    slideIndexImages = 1;
  }

  slides[slideIndexImages - 1].style.display = "block";

  setTimeout(showSlidesImages, 2000);
}
