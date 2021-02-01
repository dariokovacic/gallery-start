const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i = 1; i <= 5; i++) {
  const newImage = document.createElement('img');
  let path = `images/pic${i}.jpg`;
  newImage.setAttribute('src', path);
  thumbBar.appendChild(newImage);  
}



/* Wiring up the Darken/Lighten button */
