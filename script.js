// Write your JavaScript code here!
function init() {
   let form = document.querySelector("form")
  
   form.addEventListener("submit", function(event) {
      let pilotName =  document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let faultyItems = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatus");
   
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
       alert("All fields are required!");
       event.preventDefault();
   } else if (!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
       alert("Please enter a valid response for all fields!");
       event.preventDefault();
   } else {
      pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch!`;
      copilotStatus.innerHTML = `Copilot ${copilotName.value} is ready for launch!`;
      if (fuelLevel.value < 10000 && cargoMass.value > 10000) {
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "Fuel level too low for launch";
         cargoStatus.innerHTML = "Cargo mass too high for launch";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         event.preventDefault();
      } else if (fuelLevel.value < 10000 && cargoMass.value < 10000) {
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "Fuel level too low for launch";
         cargoStatus.innerHTML = "Cargo mass low enough for launch";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         event.preventDefault();
      } else if (fuelLevel.value > 10000 && cargoMass.value > 10000) {
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "Fuel level high enough for launch";
         cargoStatus.innerHTML = "Cargo mass too high for launch";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         event.preventDefault();
      } else {
         launchStatus.innerHTML = "Shuttle is ready for launch!";
         launchStatus.style.color = "green";
      }
    }

    });

 };

window.addEventListener ("load", function() {
fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
   response.json().then( function(json) {
      let randomIndex;
      randomIndex = Math.floor(Math.random() * json.length);
      let missionTarget = document.getElementById("missionTarget");
      missionTarget.innerHTML = `
      <h2>Mission Destination</h2>
      <ol>
         <li>Name: ${json[randomIndex].name}</li>
         <li>Diameter: ${json[randomIndex].diameter}</li>
         <li>Star: ${json[randomIndex].star}</li>
         <li>Distance from Earth: ${json[randomIndex].distance}</li>
         <li>Number of Moons: ${json[randomIndex].moons}</li>
      </ol>
      <img src="${json[randomIndex].image}">
      `; 
   });
 init();
});

});

