console.log("hello");
var dogArray = [];
var breedsArray = [];

function dogsJSONConvert() {
	var data = JSON.parse(this.responseText);
	dogArray = data.dogs;
	// console.log(dogArray);
	addBreedsToDogs(dogArray);
}

function breedsJSONConvert() {
	var data = JSON.parse(this.responseText);
	breedsArray = data.breeds;
	console.log(breedsArray);
}

function executeThisCodeIfFileErrors() {
	console.log("shit broke");
}

function addBreedsToDogs(dogs) {
	dogArray.forEach(function(dogs){
		for (var i=0; i < breedsArray.length; i++) {
			if (dogs.breed-id === breedsArray[i].id) {
				dogs.breedName = breedsArray[i].name;
			}
		}
	});
	console.log(dogArray);
}

var dogRequest = new XMLHttpRequest();
dogRequest.addEventListener("load", dogsJSONConvert);
dogRequest.addEventListener("error", executeThisCodeIfFileErrors);
dogRequest.open("GET", "dogs.json");
dogRequest.send();

var breedRequest = new XMLHttpRequest();
breedRequest.addEventListener("load", breedsJSONConvert);
breedRequest.addEventListener("error", executeThisCodeIfFileErrors);
breedRequest.open("GET", "breeds.json");
breedRequest.send();