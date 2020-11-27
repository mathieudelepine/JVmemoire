window.onload = () => {
	'use strict';

	// test si le navigateur du client gère le serviceWorker
	if ('serviceWorker' in navigator) {
	navigator.serviceWorker
			 .register('./sw.js'); // le cas échant on enregistre notre gestionnaire
	}

	document.getElementById("moncercle1")
}

// récupération du html
var cercle = document.querySelectorAll('.cercle');
var startButton = document.querySelector('#start');
var resetButton = document.querySelector('#reset');


// Mon constructeur(moule à cercle qui leur done un etat entre 1 et 4)
class circle {
	constructor(etat) {
		this.etat = etat;
	}
	// afficherProprietes() {
	// 	console.log(this.etat);
	// }
}

// créer 4 cercles avec un etat différent de 0 à 3

var blue = new circle(0);// appel au constructeur
var purple = new circle(1);// appel au constructeur
var red = new circle(2);// appel au constructeur
var orange = new circle(3);// appel au constructeur

//Générateur nombre entre 0 et 3 pour avoir 4 issues possible

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
  }

let memoire = getRandomInt(4); // memoire prend un nombre aléatoire avec 4 issues
console.log(memoire)

//fonction qui check si un etat d'un des 4 cercle est égale au nomre aléatoire
//si oui il faudrais que le cercle prenne un état actife (circle.active en CSS)

function testNum() {
	if ( memoire == blue.etat) {
	  console.log("blue");
	} else if ( memoire == purple.etat){
	  console.log("purple");
	} else if ( memoire == red.etat){
		console.log("red");
	} else if( memoire == orange.etat){
		console.log("orange");
	}
  }



  

//
//AZERTY GAME IN CONSOLE
//


console.log('azerty Game')

const sequence = ['a','z','e','r','t','y']
console.log("apuie dans l'ordre sur " + sequence)

//création du stockage des touche 

var combinaison = []

//sur quel touche on appuie ?? (→ l'afficher→ la stocker)

function verification() {
	if ( combinaison.length == sequence.length) {
		console.log("WIN");
	}
}

window.addEventListener(
    'keypress',
    (event) => {
        const isLetter = sequence.includes(event.key);
        if (isLetter) {
			console.log(event.key)
			combinaison.push(event.key);
			verification ();
        }
    }
)

