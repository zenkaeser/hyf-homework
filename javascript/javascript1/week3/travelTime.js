const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime = countTimeForTravel(travelInformation);

function countTimeForTravel(travelInformation) {
  const time = (travelInformation.destinationDistance / travelInformation.speed);
  
  const hours = Math.floor(time);
  const minutes_2 = (time - hours) * 60;
  const minutes = Math.round(minutes_2);

  return hours+ " hours and " +minutes+ " minutes.";
}

console.log(travelTime); 