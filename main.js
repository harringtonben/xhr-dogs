function dogsJSONConvert() {
	var dogData = JSON.parse(this.responseText).dogs;
	getBreedz(dogData);
	// console.log('dogs data', dogData);
}

function executeThisCodeIfFileErrors() {
	console.log("shit broke");
}

var dogRequest = new XMLHttpRequest();
dogRequest.addEventListener("load", dogsJSONConvert);
dogRequest.addEventListener("error", executeThisCodeIfFileErrors);
dogRequest.open("GET", "dogs.json");
dogRequest.send();

function getBreedz(dogz) {
// console.log('dogs array insidegetBreedz',dogz);
var breedRequest = new XMLHttpRequest();
breedRequest.addEventListener("load", breedsJSONConvert);	
breedRequest.addEventListener("error", executeThisCodeIfFileErrors);
breedRequest.open("GET", "breeds.json");
breedRequest.send();

	function breedsJSONConvert() {
		var breedsData = JSON.parse(this.responseText).breeds;
		// console.log('breeds data', breedsData);
		// console.log('breeds', breedsData);
		// console.log('dogs next to breeds data', dogz);
		combinedArray(dogz, breedsData);
	}
}

function combinedArray(dogsArray, breedsArray) {
	// console.log('breeds array', breedsArray);
	// console.log('dogs array', dogsArray);
	dogsArray.forEach(function(dog){
		var currentBreedID = dog['breed-id'];
		// console.log(currentBreedID);
		breedsArray.forEach(function(breed) {
		if (currentBreedID === breed.id) {
			// console.log(breed);
			dog['dogBreed'] = breed.name;
			dog['basePrice'] = breed['base-price'];
			dog['description'] = breed.description;
			dog['finalPrice'] = dog['add-on-price'] + dog.basePrice; 
		}
		});
		// console.log(dog);
	});
	// console.log(dogsArray);
	domString(dogsArray);
}

function domString(dogs) {

}

function writeToDom() {
//write to dom
}