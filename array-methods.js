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
let capitalPlanets = planets.map( function(currentPlanet) {
	return currentPlanet.charAt(0).toUpperCase() + currentPlanet.substr(1);
})

console.log("capital planets", capitalPlanets);

capitalPlanets.forEach( function(planet) {
	capitalDiv.innerHTML += `<h3>${planet}</h3>`;
})

// Use the filter method to create a new array that contains planets with the letter 'e'
let ePlanets = planets.filter( function(currentPlanet) {
	return currentPlanet.includes("e");
})

console.log("e planets", ePlanets)

ePlanets.forEach( function(planet) {
	filterDiv.innerHTML += `<h3>${planet}</h3>`;
})

// Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

let newSentence = words.reduce( function(curr, prev) {
	return curr + " " + prev;
})

reduceDiv.innerHTML = newSentence + ".";