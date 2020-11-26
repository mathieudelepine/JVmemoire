window.onload = () => {
	'use strict';

	// test si le navigateur du client gère le serviceWorker
	if ('serviceWorker' in navigator) {
	navigator.serviceWorker
			 .register('./sw.js'); // le cas échant on enregistre notre gestionnaire
	}

	document.getElementById("moncercle1")
}

// class circle {
// 	constructor(etat) {
// 		this.etat = etat;
// 	}
// 	afficherProprietes() {
// 		console.log(this.etat);
// 	}
// }

// // créez 5 cercles

// var circle1 = new circle(0);// appel au constructeur
// circle1.afficherProprietes();

// var circle2 = new circle(0);// appel au constructeur
// circle2.afficherProprietes();

// var circle3 = new circle(0);// appel au constructeur
// circle3.afficherProprietes();

// var circle4 = new circle(0);// appel au constructeur
// circle4.afficherProprietes();

// var circle5 = new circle(0);// appel au constructeur
// circle5.afficherProprietes();

var game = {
	count: 0,
	possibilities: ['#purple','#blue', '#red', '#orange'],
	currentGame: [],
	player: [],
}