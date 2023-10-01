const body = document.querySelector('body');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');

// dark and light mode
moon.addEventListener('click', darkmode);
sun.addEventListener('click', lightmode);

function darkmode() {
    moon.style.display = 'none';
    sun.style.display = 'block';

    // change colors
    body.style.backgroundColor = '#04090F';
    body.style.color = '#D9E3E5';
}

function lightmode() {
    moon.style.display = 'block';
    sun.style.display = 'none';

    // change colors
    body.style.backgroundColor = '#fff';
    body.style.color = '#04090F';
}








