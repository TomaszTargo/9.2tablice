// scripts.js
//zdeklaracja tablic
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

//console.log(allNames);

var newName = 'Asia';

var indexOfadd = allNames.indexOf(newName);
	if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
	} else{
	var allNames = ('takie imię już jest')	
	}
console.log(allNames);