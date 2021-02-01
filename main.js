const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i = 1; i <= 5; i++) {
  const newImage = document.createElement('img');
  let path = `images/pic${i}.jpg`;
  newImage.setAttribute('src', path);
  newImage.onclick = function () {
    displayedImage.setAttribute('src', path);
  };

  thumbBar.appendChild(newImage);
}

btn.onclick = function () {
  const className = this.getAttribute('class');
  if (className === 'dark') {
    this.setAttribute('class', 'light');
    this.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    this.setAttribute('class', 'dark');
    this.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}



/* Wiring up the Darken/Lighten button */
