window.onload = () => {
	'use strict';

	// test si le navigateur du client gère le serviceWorker
	if ('serviceWorker' in navigator) {
	navigator.serviceWorker
			 .register('./sw.js'); // le cas échant on enregistre notre gestionnaire
	}
}
