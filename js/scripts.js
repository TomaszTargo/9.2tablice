// scripts.js
//zdeklaracja tablic
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

//console.log(allNames);

var newName = 'Asia';

var indexOfadd = allNames.indexOf(newName);
  if ((indexOfadd) === -1) {
	allNames.push(newName);
	console.log(allNames);
  } else {
	console.log('takie imie juz jest');	
	}
