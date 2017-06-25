let planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

let planetDiv = document.getElementById("planets");
let capitalDiv = document.getElementById("capital");
let filterDiv = document.getElementById("filter");
let reduceDiv = document.getElementById("reduce");

// Use the forEach method to add the name of each planet to a div element in your HTML with an id of "planets".
planets.forEach( function(currentPlanet) {
	planetDiv.innerHTML += `<h3>${currentPlanet}</h3>`;
})


// Use the map method to create a new array where the first letter of each planet is capitalized
planets.map( function(currentPlanet, index) {
	planets = currentPlanet.charAt(0).toUpperCase() + currentPlanet.substr(1);
	capitalDiv.innerHTML += `<h3>${planets}</h3>`;
})

// Use the filter method to create a new array that contains planets with the letter 'e'
// function checkE(planets) {
// 	return planets.contains("e");
// }
// console.log(planets)
// console.log(planets.filter(checkE))

// Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

let newSentence = words.reduce( function(curr, prev) {
	return curr + " " + prev;
})

reduceDiv.innerHTML = newSentence + ".";