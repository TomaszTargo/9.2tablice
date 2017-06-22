// scripts.js
//zdeklaracja tablic
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames)

//console.log(allNames);

var newName = 'Pawel';

var indexOfadd = allNames.indexOf(newName);

function addName (allNames, newName){
	if (allNames.indexOf(newName) === -1) {
		return(allNames.push(newName))	
	} 

}
var result = addName(allNames, newName)
console.log(allNames);