let menupressed = false;

let menuburger = document.querySelector('.hamburger');
let app = document.querySelector('#app');
let menu = document.querySelector('#menu');

menuburger.addEventListener('click', () => {
	menupressed = !menupressed;
	/*console.log(menupressed);*/
	if(menupressed) {
		menu.style.display = 'flex';
		app.style.display = 'none';
	}
	else {
		menu.style.display = 'none';
		app.style.display = 'flex';
	}
});

// MENU
let url = 'data/menu.json';
let menudata;
function getData(link) {
    fetch(link)
    .then(response => response.json())
    .then(commits => {
        menudata = commits[0].menu;
	})
	.then(console.log(menudata));
	
}
getData(url);